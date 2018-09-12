// @flow

import React, { Component } from 'react';
import type { Dispatch, State } from '../../shared/redux.types';
import { bindActionCreators } from 'redux';
import AppMiddleware from '../../modules/app/middleware';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';

type HomeProps = {
    message:string,
    dispatchHello:(message:string) => void,
}
type HomeState = {
    scrollPosition:number,
    showLoader:boolean,
}

const mapStateToProps = (state:State) => ({
    message: state.app.message,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    dispatchHello: message => AppMiddleware.dispatchHello(message),
}, dispatch);

class Home extends Component<HomeProps, HomeState> {
    constructor(props) {
        super(props);

        this.state = {
            showLoader: false,
        };
    }

    handleClick = evt => {
        evt.preventDefault();

        const {
            dispatchHello,
            message,
        } = this.props;

        dispatchHello(message === '' ? 'Hello World!' : '');

        this.setState({
            showLoader: true,
        });

        setTimeout(() => {
            this.setState({
                showLoader: false,
            });
        }, 3000);

    };

    render() {
        const {
            message,
        } = this.props;

        return (
            <div className="home">
                <p>
                    Home Page Message :: { message }
                </p>

                <Button
                    label="New Message"
                    type="secondary"
                    isLoading={ this.state.showLoader }
                    onClick={ this.handleClick }/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);