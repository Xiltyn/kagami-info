// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Header from '../../components/Header/Header';
import animationContainer from '../../utils/animationContainer';
import { headerPoses } from '../../shared/poses.config';
import { logger } from '../../utils/logger';
import Navigation from '../../components/Navigation/Navigation';
import navConfig from '../../shared/nav.config';
import * as ReactDOM from 'react-dom';
import { SECTIONS } from '../../shared/staticTypes';

const AnimatedHeader = animationContainer(Header);

type ContentProps = {
    match:Object,
}

type ContentState = {
    currentSection: SECTIONS,
    currentPosition: number,
}

class Content extends Component<ContentProps, ContentState> {
    state = {
        currentSection: SECTIONS.HERO,
        currentPosition: 0,
    };

    componentDidMount() {
        window.addEventListener('scroll', evt => logger('==> Content |> scroll position', 'INFO', evt));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', evt => logger('==> Content |> scroll position', 'INFO', evt));
    }

    handleChangeView = (direction:'UP'|'DOWN') => {
        const thisDOMNode:any = ReactDOM.findDOMNode(this);
        const windowHeight = thisDOMNode.getBoundingClientRect().height;
        const currentSectionIndex = navConfig.indexOf(el => el.section === this.state.currentSection);

        if(direction === 'UP') {

            this.setState({
                currentSection: navConfig[ currentSectionIndex - 1 ].section,
                currentPosition: navConfig[ currentSectionIndex - 1 ].id * windowHeight,
            });
        } else if (direction === 'DOWN') {

            this.setState({
                currentSection: navConfig[ currentSectionIndex + 1 ].section,
                currentPosition: navConfig[ currentSectionIndex + 1 ].id * windowHeight,
            });
        }

    };

    render() {
        const {
            match: { url },
        } = this.props;

        logger('==> Content/index.js |> Current match state :: ', 'IMPORTANT', this.props.match);

        return (
            <div className="content-viewport">
                <div
                    className="content-container"
                    style={ {
                        transform: `translateY(${ 0 }px)`,
                    } }>
                    <AnimatedHeader
                        isMounted={ url === '/' }
                        delayTime={ 800 }
                        poses={ headerPoses.onMount }
                    />
                    <Navigation/>
                    <div className={ 'content' }>
                        <Route path={ '/' } component={ Home } exact={ true }/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Content;

