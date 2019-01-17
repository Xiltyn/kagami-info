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
import Imagery from '../__universal/Imagery/Imagery';
import animationContainer from '../../utils/animationContainer';
import { heroPoses } from '../../shared/poses.config';
import ScrollButton from '../__universal/ScrollButton/ScrollButton';
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

        const imageryConfig = [
            {
                styles: {
                    width: 250,
                    height: 237,
                    top: '10%',
                    left: '55%',
                },
                filename: require('../../styles/images/layer_1.png'),
                name: 'Layer 1',
            },
            {
                styles: {
                    width: 431,
                    height: 233,
                    top: '60%',
                    left: '5%',
                },
                filename: require('../../styles/images/layer_2.png'),
                name: 'Layer 2',
            },
            {
                styles: {
                    transform: `translate(${-mousePosition.x / 25}px, ${-mousePosition.y / 30}px)`,
                    width: 274,
                    height: 335,
                    top: '5%',
                    left: '10%',
                },
                filename: require('../../styles/images/layer_3.png'),
                name: 'Layer 3',
            },
        ];

        return(
            <section className="hero">
                <Info
                    shouldAnimate={ shouldAnimate }
                    copy={ copy }/>
                <AnimatedImagery
                    delay={ 1400 }
                    mousePosition={ mousePosition }
                    config={ imageryConfig }
                    poses={ heroPoses.onMountImagery }
                    isMounted={ shouldAnimate }/>
                <ScrollButton onClick={ nextSection }/>
            </section>
        );
    }

}

export default Hero;
