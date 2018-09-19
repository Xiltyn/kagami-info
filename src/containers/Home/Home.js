// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import { headerPoses } from '../../shared/poses.config';
import animationContainer from '../../utils/animationContainer';

import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';

import './Home.scss';

import type { Dispatch, State } from '../../shared/redux.types';
import { logger } from '../../utils/logger';

const AnimatedHeader = animationContainer(Header);

type HomeProps = {
    copy:*;
    match:*;
}
type HomeState = {
    mousePosition:{x:number,y:number},
}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({

}, dispatch);

class Home extends Component<HomeProps, HomeState> {
    state = {
        mousePosition: {
            x: 0,
            y: 0,
        },
    };

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (evt:*, options:{ debug:boolean } = { debug: false }) => {
        if(options.debug){
            logger('==> Hero.js |> onMouseMove evt coords :: ', 'INFO', { x: evt.x, y: evt.y });
        }

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        this.setState({
            mousePosition: {
                x: evt.x - (windowWidth / 2),
                y: evt.y - (windowHeight / 2),
            },
        });

    };

    render() {
        const {
            copy,
            match: {
                url,
            },
        } = this.props;

        const {
            mousePosition,
        } = this.state;

        const fullpageOptions = {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            callbacks: ['afterLoad'],
            debug: false,
            normalScrollElements: '.showcase-container',
        };

        return (<ReactFullpage
               { ...fullpageOptions }
               render={ ({ state, fullpageApi }) => {
                   if(fullpageOptions.debug) {
                       logger('==> Home > render() |> fullPage DEBUG :: ', 'INFO', {
                           state: state,
                           api: fullpageApi,
                       });
                   }

                   return(
                       <div className="home">
                           <AnimatedHeader
                               isMounted={ url === '/' }
                               delayTime={ 800 }
                               poses={ headerPoses.onMount }
                           />
                           <div className="section">
                               <Hero
                                   nextSection={ fullpageApi.moveSectionDown }
                                   shouldAnimate={ fullpageApi.getActiveSection().index === 0 }
                                   mousePosition={ mousePosition }
                                   copy={ copy }/>
                           </div>
                           <div className="section">
                               <Services
                                   nextSection={ fullpageApi.moveSectionDown }
                                   mousePosition={ mousePosition }
                                   shouldAnimate={ fullpageApi.getActiveSection().index === 1 }
                                   copy={ copy }/>
                           </div>
                       </div>
                   );
               } }
           />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
