/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/1/18 3:34 AM
 ===============================================*/

/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/1/18 1:04 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import Article from '../__universal/Article/Article';
import Mockup from '../__universal/Mockup/Mockup';
import type { copy, project } from '../../modules/app/types';

import './Native.scss';
import animationContainer from '../../utils/animationContainer';
import { nativePoses } from '../../shared/poses.config';

const AnimatedMockup = animationContainer(Mockup);
const AnimatedArticle = animationContainer(Article);

type NativeProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
}

type NativeState = {
}

class Native extends Component<NativeProps, NativeState> {
    static exampleProject:project = {
        title: 'Example project',
        description: 'Lorem ipsum...',
        images: {
            thumbnail: '',
            full: '',
            layout: 'iphone_mockup_preview.jpg',
        },
    };

    render() {
        const {
            copy,
            shouldAnimate,
            mousePosition,
        } = this.props;

        return(
            <section className="native">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'native_top' ] }
                </h1>
                <div className="native-content">
                    <AnimatedMockup
                        poses={ nativePoses.onMountMockup }
                        delay={ 800 }
                        isIphone={ true }
                        scrollPosition={ mousePosition.y * .5 }
                        isMounted={ shouldAnimate }
                        showcase={ Native.exampleProject }/>
                    <AnimatedArticle
                        poses={ nativePoses.onMountArticle }
                        delay={ 1000 }
                        scrollPosition={ mousePosition.y }
                        isMounted={ shouldAnimate }
                        header={ copy[ 'native_article_header' ] }
                        body={ copy[ 'native_article_body' ] }/>
                    <div className="image-container">
                        <img src={ require('../../styles/images/icn-creativity.png') } alt="Creativity Icon"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Native;
