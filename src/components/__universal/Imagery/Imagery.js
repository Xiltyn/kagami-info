/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/13/18 12:17 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';

import './Imagery.scss';

type imageryElementStyles = {
    width:number,
    height:number,
    top:string,
    left:string,
}

type ImageryProps = {
    mousePosition: {
        x:number,
        y:number,
    },
    config: [{
        filename:string,
        styles:imageryElementStyles,
        name:string,
    }]
}

type ImageryState = {

}

class Imagery extends Component<ImageryProps, ImageryState> {

    getElementStyles = (mousePosition:{x:number,y:number}, index:number, styles:imageryElementStyles) => {
        if(index % 2 === 0) {
            return {
                ...styles,
                transform: `translate(${-mousePosition.x / (25 - (((index + 1) * 32) / index))}px, ${-mousePosition.y / (15 - (((index + 1) * 27) / index))}px)`,
            };
        } else {
            return {
                ...styles,
                transform: `translate(${mousePosition.x / (25 + (((index - 1) * 32) / index))}px, ${-mousePosition.y / (15 + (((index - 1) * 27) / index))}px)`,
            };
        }
    };

    render() {
        const {
            mousePosition,
            config,
        } = this.props;

        return (
            <div className="imagery-container">
                <div className="imagery">
                    {
                        config.map((image, index) => (
                            <img
                                key={ index }
                                className={ `layer layer-${index}` }
                                style={ this.getElementStyles(mousePosition, index + 1, image.styles) }
                                src={ image.filename } alt={ image.name }/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Imagery;
