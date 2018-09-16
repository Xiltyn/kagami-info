/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 7:52 PM
 ===============================================*/

//@flow

import React, { Component } from 'react';

import './Hero.scss';
import Info from './Info/Info';
import Imagery from './Imagery/Imagery';
import animationContainer from '../../utils/animationContainer';
import { heroPoses } from '../../shared/poses.config';
import { logger } from '../../utils/logger';
import ScrollButton from '../ScrollButton/ScrollButton';
import type { copy } from '../../modules/app/types';

const AnimatedImagery = animationContainer(Imagery);

type HeroProps = {
    copy:copy;
    scrollPosition:number;
}

type HeroState = {
    mousePosition: {
        x:number,
        y:number,
    }
}

class Hero extends Component<HeroProps, HeroState> {
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
            scrollPosition,
        } = this.props;

        const {
            mousePosition,
        } = this.state;

        return(
            <section className="hero">
                <Info
                    scrollPosition={ scrollPosition }
                    copy={ copy }/>
                <AnimatedImagery
                    delay={ 1400 }
                    mousePosition={ mousePosition }
                    poses={ heroPoses.onMountImagery }
                    isMounted={ scrollPosition >= 0 }/>
                <ScrollButton onClick={ evt => logger(' Hero.js |> Scroll Button onClick event :: ', 'INFO', evt) }/>
            </section>
        );
    }

}

export default Hero;
