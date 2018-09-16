// @flow

import React, { Component } from 'react';
import type { Dispatch, State } from '../../shared/redux.types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

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

    componentDidMount() {
        document.addEventListener('scroll', this.handleScrollPosition);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScrollPosition);
    }

    handleScrollPosition = () => {
        //let supportPageOffset = window.pageXOffset !== undefined;
        //let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
            x: window.pageXOffset,
            y: window.pageYOffset,
        };

        //logger('==> Home.js |> handleScrollPosition scroll :: ', 'INFO', scroll);

        this.setState({
            scrollPosition: scroll.y,
        });
    };

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
                <Services
                    scrollPosition={ scrollPosition }
                    copy={ copy }/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
