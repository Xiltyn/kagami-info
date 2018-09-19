// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Navigation from '../../components/Navigation/Navigation';

import { logger } from '../../utils/logger';



type ContentProps = {
    match:Object,
}

type ContentState = {

}

class Content extends Component<ContentProps, ContentState> {
    state = {

    };

    render() {
        logger('==> Content/index.js |> Current match state :: ', 'IMPORTANT', this.props.match);

        return (
            <div
                className="content-container">
                <div className="content">
                    <Navigation/>
                    <Route path={ '/' } component={ Home } exact={ true }/>
                </div>
            </div>
        );
    }

}

export default Content;

