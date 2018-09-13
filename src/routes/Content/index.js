// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Header from '../../components/Header/Header';
import animationContainer from '../../utils/animationContainer';
import { headerPoses } from '../../shared/poses.config';
import { logger } from '../../utils/logger';
import Navigation from '../../components/Navigation/Navigation';

const AnimatedHeader = animationContainer(Header);

type ContentProps = {
    match:Object,
}

type ContentState = {

}

class Content extends Component<ContentProps, ContentState> {

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const {
            match: { url },
        } = this.props;

        logger('==> Content/index.js |> Current match state :: ', 'IMPORTANT', this.props.match);

        return (
            <div>
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
        );
    }

}

export default Content;

