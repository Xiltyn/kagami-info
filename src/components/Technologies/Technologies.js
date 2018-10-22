/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/2/18 1:31 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';

import Separator from '../__universal/Separator/Separator';
import PolylineNavigation from '../__universal/PolylineNavigation/PolylineNavigation';
import ArrowNavigation from '../__universal/ArrowNavigation/ArrowNavigation';

import type { copy } from '../../modules/app/types';
import './Technologies.scss';
import { TechnologiesList } from '../../modules/app/models';
import InfoBox from './InfoBox/InfoBox';

type TechnologiesProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
    technologiesList: TechnologiesList,
}

type TechnologiesState = {
    list:Array<Object>,
    current:number,
}

class Technologies extends Component<TechnologiesProps, TechnologiesState> {
    constructor(props:TechnologiesProps) {
        super(props);

        this.state = {
            list: this.props.technologiesList.data,
            current: this.props.technologiesList.data.length,
        };
    }

    componentDidMount() {
        this.setCurrent(1);

    }

    shiftList = (next:number, type:'UP'|'DOWN') => {
        const {
            list,
            current,
        } = this.state;

        let nextList = Array.from(list);

        console.log('next', next);
        console.log('current', current);
        console.log('nextList', nextList);

        for(let el of list) {
            if(el.id === next) {
                if(type === 'UP') {
                    nextList.unshift(nextList.pop());
                } else if (type === 'DOWN') {
                    nextList.push(nextList.shift());
                }

                this.setState({
                    list: nextList,
                    current: next,
                });

                break;
            }
        }
    };

    setCurrent = (next:number) => {
        const {
            list,
        } = this.state;

        let nextList = Array.from(list);

        for(let el of list) {
            if(el.id !== next) {
                nextList.push(nextList.shift());
            } else {
                nextList.push(nextList.shift());
                this.setState({
                    list: nextList,
                    current: next,
                });

                break;
            }
        }
    };

    render() {
        const {
            copy,
            technologiesList,
        } = this.props;

        const {
            list,
            current,
        } = this.state;

        const navConfig = technologiesList.techNavConfig;

        return(
            <section className="technologies">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'technologies_top' ] }
                    <Separator type='LONG'/>
                </h1>
                <div className="technologies-content">
                    <div className="left-col">
                        <ArrowNavigation
                            handleNav={ this.shiftList }
                            config={ {
                                current: current,
                                all: list.map(el => el.id ? el.id : 0),
                                shouldLoop: true,
                            } }/>
                    </div>
                    <div className="mid-col">
                        {
                            list.length && list.map((tech, index) => (
                                <InfoBox
                                    key={ tech.id }
                                    tech={ tech }
                                    techIndex={ index }
                                    isActive={ tech.id === current }/>
                            ))
                        }
                    </div>
                    <div className="right-col">
                        {
                            navConfig.length && <PolylineNavigation
                                current={ current }
                                passNext={ this.setCurrent }
                                initialPositions={ navConfig }/>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Technologies;
