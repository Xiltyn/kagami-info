import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Navigation from '../../components/Navigation/Navigation';

class Content extends Component {

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <Navigation />
                <div className={ 'content' }>
                    <Route path={ '/' } component={ Home } exact={ true }/>
                </div>
            </div>
        );
    }

}

export default Content;

