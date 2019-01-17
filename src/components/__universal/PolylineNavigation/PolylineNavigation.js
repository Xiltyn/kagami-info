/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/18/18 11:51 PM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import { rect } from '../../../shared/genericModels';

import type { techNavConfig } from '../../../modules/app/types';
import './PolylineNavigation.scss';

type PolylineNavigationProps = {
    passNext:(nextId:number) => void,
    initialPositions:techNavConfig,
    current:number,
}

type PolylineNavigationState = {
    pointsPositions:techNavConfig,
    isActive:boolean,
}

class PolylineNavigation extends Component<PolylineNavigationProps, PolylineNavigationState> {
    animationTicker:*;

    state = {
        pointsPositions: this.props.initialPositions,
        isActive: false,
    };

    componentDidMount() {
        setTimeout(() => {
            this.initiatePointsAnimation();
        }, 1000);
    }

    componentWillUnmount() {
        this.clearPointsAnimation();
    }

    getRandomPosition = (coords:{x:number, y:number}) => {
        const randomX = Math.floor(Math.random() * (120 - 10) + 10);
        const randomY = coords.y;

        return new rect(randomX, randomY);
    };

    updateNavPoints = ():techNavConfig => {
        const {
            pointsPositions,
        } = this.state;

        let result = [];

        pointsPositions.map(el => {
            el.coords = this.getRandomPosition(el.coords);

            result = [ ...result, el ];
        });

        return result;
    };

    initiatePointsAnimation = () => {
        const tick = 1200;

        this.animationTicker = setInterval(() => {
            this.setState({
                pointsPositions: this.updateNavPoints(),
                isActive: false,
            });
        }, tick);
    };

    freezePoints = () => {
        this.clearPointsAnimation();
    };

    clearPointsAnimation = () => {
        window.clearInterval(this.animationTicker);
        this.setState({
            isActive: true,
        });
    };

    render() {
        const {
            pointsPositions,
            isActive,
        } = this.state;

        const {
            current,
            passNext,
        } = this.props;

        return pointsPositions && <ul
            onMouseEnter={ this.freezePoints }
            onMouseLeave={ this.initiatePointsAnimation }
            className={ `polyline-nav ${isActive ? 'active' : ''}` }>
            {
                pointsPositions.map(point => (
                    <li
                        className={ `nav-element nav-element--${ point.slug } ${ point.id === current ? 'active' : ''}` }
                        onClick={ () => point.id && passNext(point.id) }
                        style={ {
                            transform: `translate(${point.coords.x}px, ${point.coords.y}px)`,
                        } }
                        key={ point.id }>
                        <div className="icon">
                            { point.icon ? point.icon : point.id + 1 }
                        </div>
                        <p>
                            { point.label }
                        </p>
                    </li>
                ))
            }
            <svg
                className="nav-polyline"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="130px"
                height={ pointsPositions.length * 50 }
                viewBox={ `0 0 130 ${pointsPositions.length * 50}` }>
                <path
                    strokeWidth="2"
                    stroke="#FFF"
                    fill="transparent"
                    d={
                        `M ${pointsPositions[ 0 ].coords.x + 4} ${pointsPositions[ 0 ].coords.y + 4}
                                    ${pointsPositions.map((point, index) => index > 0 ? `L ${point.coords.x + 4} ${point.coords.y + 4}` : '').join(' ')}`
                    }/>
            </svg>
        </ul>;
    }
}

export default PolylineNavigation;
