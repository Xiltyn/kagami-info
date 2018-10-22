/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/21/18 12:00 AM
 ===============================================*/

// @flow

import React from 'react';
import './InfoBox.scss';

type InfoBoxProps = {
    tech: Object,
    techIndex: number,
    isActive: boolean,
    style: Object,
}

const InfoBox = (props:InfoBoxProps) => {
    const {
        tech,
        isActive,
        techIndex,
        style,
    } = props;

    return (
        <div
            className={ `info-box ${ isActive ? 'active' : '' }` }
            style={ {
                marginTop: `${techIndex * 8}px`,
                marginLeft: `-${techIndex * 8}px`,
                ...style,
            } }>
            <h3>{ tech.name }</h3>
            <p>{ tech.text }</p>
            { tech.icon }
        </div>
    );
};

export default InfoBox;
