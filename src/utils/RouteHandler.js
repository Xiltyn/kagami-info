import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import navConfig from 'shared/nav.config';

import AuthMiddleware from 'modules/auth/middleware';
import { logger } from './logger';
import LoaderSpinner from '../components/Loader/LoaderSpinner';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    isLoggedIn: () => AuthMiddleware.isLoggedIn(),
}, dispatch);

class RouteHandler extends Component {
    static propTypes = {
        component: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.any,
        isLoggedIn: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        if (!props.isAuthenticated || props.isAuthenticated === 'pending') {
            setTimeout(() => {
                props.isLoggedIn();
            }, 5);
        }
    }

    render() {
        const { isAuthenticated, component, ...rest } = this.props;
        const componentPath = rest.location.pathname;
        const currentConfigElement = navConfig.filter(
            element => element.url === componentPath)[ 0 ] && navConfig.filter(
            element => element.url === componentPath)[ 0 ].type;

        logger('==> RouteHandler |> componentPath', 'INFO', rest.location);

        return currentConfigElement === 'public' ?
            (!isAuthenticated ?
                <Route
                    { ...rest }
                    render={ props =>
                        React.createElement(component, props)
                    }
                /> : isAuthenticated === 'pending' ? <LoaderSpinner/> : <Redirect to={ '/new' }/>) :
            currentConfigElement === 'private' ?
                (isAuthenticated ?
                    <Route
                        { ...rest }
                        render={ props =>
                            React.createElement(component, props)
                        }
                    /> : isAuthenticated === 'pending' ? <LoaderSpinner/> : <Redirect to={ '/login' }/>) :
                currentConfigElement === 'default' ?
                    (isAuthenticated === 'pending' ?
                        <LoaderSpinner/> : <Route
                            { ...rest }
                            render={ props =>
                                React.createElement(component, props)
                            }/>) :
                        <Redirect to={ '/404' }/>;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RouteHandler);
