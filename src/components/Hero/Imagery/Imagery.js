/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/13/18 12:17 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';

import './Imagery.scss';

type ImageryProps = {
    mousePosition: {
        x:number,
        y:number,
    }
}

type ImageryState = {

}

class Imagery extends Component<ImageryProps, ImageryState> {
    render() {
        const {
            mousePosition,
        } = this.props;

        return (
            <div className="imagery-container">
                <div className="imagery">
                    <img
                        className="layer layer-1"
                        style={ { transform: `translate(${-mousePosition.x / 25}px, ${-mousePosition.y / 30}px)` } }
                        src={ require('../../../styles/images/layer_1.png') } alt=""/>
                    <img
                        className="layer layer-2"
                        style={ { transform: `translate(${-mousePosition.x / 32}px, ${-mousePosition.y / 15}px)` } }
                        src={ require('../../../styles/images/layer_2.png') } alt=""/>
                    <img
                        className="layer layer-3"
                        style={ { transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 20}px)` } }
                        src={ require('../../../styles/images/layer_3.png') } alt=""/>
                </div>
            </div>
        );
    }
}

export default Imagery;
