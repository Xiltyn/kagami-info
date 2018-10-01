/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:27 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import Article from '../__universal/Article/Article';
import ScrollButton from '../__universal/ScrollButton/ScrollButton';

import animationContainer from '../../utils/animationContainer';
import { heroPoses, seoPoses } from '../../shared/poses.config';

import type { copy, project } from '../../modules/app/types';

import './Seo.scss';
import Imagery from '../__universal/Imagery/Imagery';

const AnimatedArticle = animationContainer(Article);
const AnimatedImagery = animationContainer(Imagery);

type SeoProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
}

type SeoState = {
}

class Seo extends Component<SeoProps, SeoState> {
    static exampleProject:project = {
        title: 'Example project',
        description: 'Lorem ipsum...',
        images: {
            thumbnail: '',
            full: '',
            layout: 'mockup_inside.jpg',
        },
    };

    render() {
        const {
            copy,
            shouldAnimate,
            mousePosition,
            nextSection,
        } = this.props;

        const imageryConfig = [
            {
                styles: {
                    width: 379,
                    height: 447,
                    top: '-30%',
                    left: '25%',
                },
                filename: require('../../styles/images/seo_layer_1.png'),
                name: 'Layer 1',
            },
            {
                styles: {
                    width: 422,
                    height: 479,
                    top: '-25%',
                    left: '15%',
                },
                filename: require('../../styles/images/seo_layer_2.png'),
                name: 'Layer 2',
            },
            {
                styles: {
                    transform: `translate(${-mousePosition.x / 25}px, ${-mousePosition.y / 30}px)`,
                    width: 511,
                    height: 190,
                    top: '-30%',
                    left: '0%',
                },
                filename: require('../../styles/images/seo_layer_3.png'),
                name: 'Layer 3',
            },
            {
                styles: {
                    transform: `translate(${-mousePosition.x / 25}px, ${-mousePosition.y / 30}px)`,
                    width: 298,
                    height: 396,
                    top: '-30%',
                    left: '25%',
                },
                filename: require('../../styles/images/seo_layer_4.png'),
                name: 'Layer 4',
            },
        ];

        return(
            <section className="seo">
                <div className="seo-content">
                    <AnimatedArticle
                        poses={ seoPoses.onMountArticle }
                        delay={ 1000 }
                        scrollPosition={ mousePosition.y }
                        isMounted={ shouldAnimate }
                        header={ copy[ 'seo_article_header' ] }
                        body={ copy[ 'seo_article_body' ] }/>
                    <AnimatedImagery
                        delay={ 1400 }
                        mousePosition={ mousePosition }
                        config={ imageryConfig }
                        poses={ heroPoses.onMountImagery }
                        isMounted={ shouldAnimate }/>
                    <ScrollButton onClick={ nextSection }/>
                </div>
            </section>
        );
    }
}

export default Seo;
