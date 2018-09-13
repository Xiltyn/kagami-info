// @flow

import React, { Component } from 'react';
import type { Dispatch, State } from '../../shared/redux.types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hero from '../../components/Hero/Hero';

type HomeProps = {
    copy:*;
}
type HomeState = {
    scrollPosition:number,
}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({

}, dispatch);

class Home extends Component<HomeProps, HomeState> {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: 0,
        };
    }

    render() {
        const {
            copy,
        } = this.props;

        const {
            scrollPosition,
        } = this.state;

        return (
            <div className="home">
                <Hero
                    scrollPosition={ scrollPosition }
                    copy={ copy }/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
