// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

import type { Dispatch, State } from '../../shared/redux.types';

type HomeProps = {
    copy:*;
}
type HomeState = {

}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({

}, dispatch);

class Home extends Component<HomeProps, HomeState> {
    render() {
        const {
            copy,
        } = this.props;

        return (
            <div className="home">
                <Hero
                    scrollPosition={ 0 }
                    copy={ copy }/>
                <Services
                    scrollPosition={ 0 }
                    copy={ copy }/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
