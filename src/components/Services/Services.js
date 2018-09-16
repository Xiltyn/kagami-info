/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:27 AM
 ===============================================*/

import React, { Component } from 'react';
import Article from './Article/Article';
import Mockup from './Mockup/Mockup';
import type { copy, project } from '../../modules/app/types';

import './Services.scss';
import { logger } from '../../utils/logger';
import * as ReactDOM from 'react-dom';
import animationContainer from '../../utils/animationContainer';
import { servicesPoses } from '../../shared/poses.config';
import ScrollButton from '../ScrollButton/ScrollButton';

const AnimatedMockup = animationContainer(Mockup);
const AnimatedArticle = animationContainer(Article);

type ServicesProps = {
    copy:copy;
    scrollPosition:number;
}

type ServicesState = {
    servicesScrollPosition:number,
}

class Services extends Component<ServicesProps, ServicesState> {
    state = {
        servicesScrollPosition: 9999,
    };

    static exampleProject:project = {
        title: 'Example project',
        description: 'Lorem ipsum...',
        images: {
            thumbnail: '',
            full: '',
            layout: 'mockup_inside.jpg',
        },
    };

    componentDidMount() {
        const servicesPosition = ReactDOM.findDOMNode(this).getBoundingClientRect();

        logger('==> Services.js |> services scroll position :: ', 'INFO', servicesPosition);

        this.setState({
            servicesScrollPosition: servicesPosition.y,
        });
    }

    render() {
        const {
            copy,
            scrollPosition,
        } = this.props;

        const {
            servicesScrollPosition,
        } = this.state;

        return(
            <section className="services">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'services_top' ] }
                </h1>
                <div className="services-content">
                    <AnimatedMockup
                        poses={ servicesPoses.onMountMockup }
                        delay={ 800 }
                        scrollPosition={ scrollPosition - servicesScrollPosition }
                        isMounted={ scrollPosition > (servicesScrollPosition - 200) }
                        showcase={ Services.exampleProject }/>
                    <AnimatedArticle
                        poses={ servicesPoses.onMountArticle }
                        delay={ 1000 }
                        scrollPosition={ scrollPosition - servicesScrollPosition }
                        isMounted={ scrollPosition > (servicesScrollPosition - 200) }
                        copy={ copy }/>
                    <ScrollButton onClick={ evt => logger(' Hero.js |> Scroll Button onClick event :: ', 'INFO', evt) }/>
                </div>
            </section>
        );
    }
}

export default Services;
