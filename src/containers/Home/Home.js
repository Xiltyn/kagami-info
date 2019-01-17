// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import { headerPoses } from '../../shared/poses.config';
import animationContainer from '../../utils/animationContainer';

import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import Seo from '../../components/Seo/Seo';
import Native from '../../components/Native/Native';
import Quality from '../../components/Quality/Quality';
import Services from '../../components/Services/Services';
import Navigation from '../../components/Navigation/Navigation';
import Technologies from '../../components/Technologies/Technologies';

import svg from '../../utils/svg';
import { logger } from '../../utils/logger';

import './Home.scss';
import type { Dispatch, State } from '../../shared/redux.types';
import { navConfig } from '../../shared/techNav.config';
import type { techNavConfig } from '../../modules/app/types';
import AppMiddleware from '../../modules/app/middleware';
import { TechnologiesList } from '../../modules/app/models';

const AnimatedHeader = animationContainer(Header);

type HomeProps = {
    copy:*;
    match:*;
    technologiesList: TechnologiesList;
    setInitialTechNavConfig: (config:techNavConfig) => void;
}
type HomeState = {
    mousePosition:{x:number,y:number},
}

const mapStateToProps = (state:State) => ({
    copy: state.app.copy,
    technologiesList: state.app.technologiesList,
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    setInitialTechNavConfig: config => AppMiddleware.spawnNavigationPoints(config),
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

        this.props.setInitialTechNavConfig(navConfig);
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
            technologiesList,
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

                   const windowHeight = window.innerHeight;

                   return(
                       <div className="home">
                           <Navigation
                               scrollTo={ fullpageApi.moveTo }
                               positionTop={ fullpageApi.getActiveSection().index * windowHeight + windowHeight * .225 }/>
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
                           <div className="section">
                               <Seo
                                    nextSection={ fullpageApi.moveSectionDown }
                                    mousePosition={ mousePosition }
                                    shouldAnimate={ fullpageApi.getActiveSection().index === 2 }
                                    copy={ copy }/>
                           </div>
                           <div className="section">
                               <Native
                                   nextSection={ fullpageApi.moveSectionDown }
                                   mousePosition={ mousePosition }
                                   shouldAnimate={ fullpageApi.getActiveSection().index === 3 }
                                   copy={ copy }/>
                           </div>
                           <div className="section section--quality">
                               <Quality
                                    nextSection={ fullpageApi.moveSectionDown }
                                    mousePosition={ mousePosition }
                                    shouldAnimate={ fullpageApi.getActiveSection().index === 4 }
                                    copy={ copy }/>
                           </div>
                           <div className="section section--projects">
                               <Technologies
                                   technologiesList={ technologiesList }
                                   nextSection={ fullpageApi.moveSectionDown }
                                   mousePosition={ mousePosition }
                                   shouldAnimate={ fullpageApi.getActiveSection().index === 5 }
                                   copy={ copy }/>
                           </div>
                           <div className="section section--contact">
                               <h2>Contact</h2>
                               <div className="svg-container">
                                   { svg.project_background_shape }
                               </div>
                           </div>
                       </div>
                   );
               } }
           />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
