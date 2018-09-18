/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 2:30 AM
 ===============================================*/

import React, { Component } from 'react';
import type { project } from '../../../modules/app/types';

import './Mockup.scss';

type MockupProps = {
    showcase:project,
    scrollPosition:number,
}

type MockupState = {

}

class Mockup extends Component<MockupProps, MockupState> {

    render() {
        const {
            showcase,
            scrollPosition,
        } = this.props;

        return(
            <div
                className="services-mockup"
                style={ { transform: `translateY(${(-scrollPosition) / 10}px)` } }>
                <div className="showcase-container">
                    <img src={ require(`../../../styles/images/${showcase.images.layout}`) } alt=""/>
                </div>
            </div>
        );
    }
}

export default Mockup;
