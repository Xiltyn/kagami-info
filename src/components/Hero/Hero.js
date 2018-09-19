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
import ScrollButton from '../ScrollButton/ScrollButton';
import type { copy } from '../../modules/app/types';

const AnimatedImagery = animationContainer(Imagery);

type HeroProps = {
    shouldAnimate:boolean,
    copy:copy;
    mousePosition: {
        x:number,
        y:number,
    },
    nextSection:() => void,
}

type HeroState = {

}

class Hero extends Component<HeroProps, HeroState> {


    render() {
        const {
            copy,
            mousePosition,
            shouldAnimate,
            nextSection,
        } = this.props;

        return(
            <section className="hero">
                <Info
                    shouldAnimate={ shouldAnimate }
                    copy={ copy }/>
                <AnimatedImagery
                    delay={ 1400 }
                    mousePosition={ mousePosition }
                    poses={ heroPoses.onMountImagery }
                    isMounted={ shouldAnimate }/>
                <ScrollButton onClick={ nextSection }/>
            </section>
        );
    }

}

export default Hero;
