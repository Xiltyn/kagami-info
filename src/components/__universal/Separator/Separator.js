/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 10:39 PM
 ===============================================*/

// @flow

import React from 'react';

import './Separator.scss';

type SeparatorProps = {
    type:'SHORT'|'LONG',
}

const Separator = (props:SeparatorProps) => {
    const {
        type,
    } = props;

    return (
        <div className={ `separator ${ type === 'LONG' ? 'separator--long' : type === 'SHORT' ? 'separator--short' : '' }` }>
            <img src={ require('../../../styles/images/separator.png') } alt=""/>
        </div>
    );
};

export default Separator;
