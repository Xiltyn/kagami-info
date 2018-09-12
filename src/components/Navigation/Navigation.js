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
import type { copy } from '../../modules/app/types';

import './Navigation.scss';

type NavigationProps = {
    copy?:copy
}

type NavigationState = {}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({

}, dispatch);

class Navigation extends Component<NavigationProps, NavigationState> {

    render() {
        const {
            copy,
        } = this.props;

        return (
            <div className='navigation'>
                <h1 className="text-bit">
                    {copy.find(el => el.name === 'hero_top').text}
                </h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);