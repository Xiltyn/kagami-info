/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:27 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import Article from '../__universal/Article/Article';
import type { copy, project } from '../../modules/app/types';

import './Services.scss';
import animationContainer from '../../utils/animationContainer';
import { servicesPoses } from '../../shared/poses.config';
import ScrollButton from '../__universal/ScrollButton/ScrollButton';
import Mockup from '../__universal/Mockup/Mockup';

const AnimatedMockup = animationContainer(Mockup);
const AnimatedArticle = animationContainer(Article);

type ServicesProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
}

type ServicesState = {
}

class Services extends Component<ServicesProps, ServicesState> {
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

        return(
            <section className="services">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'services_top' ] }
                </h1>
                <div className="services-content">
                    <AnimatedMockup
                        poses={ servicesPoses.onMountMockup }
                        delay={ 800 }
                        scrollPosition={ mousePosition.y }
                        isMounted={ shouldAnimate }
                        showcase={ Services.exampleProject }/>
                    <AnimatedArticle
                        poses={ servicesPoses.onMountArticle }
                        delay={ 1000 }
                        scrollPosition={ mousePosition.y }
                        isMounted={ shouldAnimate }
                        header={ copy[ 'services_article_header' ] }
                        body={ copy[ 'services_article_body' ] }/>
                    <ScrollButton onClick={ nextSection }/>
                </div>
            </section>
        );
    }
}

export default Services;
