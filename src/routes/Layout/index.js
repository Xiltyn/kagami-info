import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes

import asyncRoute from 'utils/asyncComponent';
import RouteHandler from '../../utils/RouteHandler';

const Content = asyncRoute(() => import('../Content'));
const Login = asyncRoute(() => import('../Login'));
const Signup = asyncRoute(() => import('../Signup'));
const Miss404 = asyncRoute(() => import('../Miss404'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
    require('../Content'); // eslint-disable-line global-require
    require('../Login'); // eslint-disable-line global-require
    require('../Signup'); // eslint-disable-line global-require
    require('../Miss404'); // eslint-disable-line global-require
}

const Layout = () => (
    <div>
        <Helmet titleTemplate="%s - Resume Writing Sucks" defaultTitle="Resume Writing Sucks" />

        <Switch>
            <RouteHandler path="/login" component={ Login } exact={ true } />
            <RouteHandler path="/signup" component={ Signup } exact={ true } />
            <RouteHandler path="/:view?" component={ Content } exact={ true } />
            <Route component={ Miss404 } />
        </Switch>

    </div>
);

export default Layout;
