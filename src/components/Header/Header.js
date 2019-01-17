/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:35 PM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch, State } from '../../shared/redux.types';

import './Header.scss';

type HeaderProps = {
    copy?:*,
}

type HeaderState = {}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({

}, dispatch);

class Header extends Component<HeaderProps, HeaderState> {

    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <img src={ require('../../styles/images/kagami_logo.png') } alt=""/>
                </div>
                <div className="shape-container">
                    <img src={ require('../../styles/images/header_shape.png') } alt=""/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
