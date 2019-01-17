/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:11 AM
 ===============================================*/

import React from 'react';

import './ScrollButton.scss';

type ScrollButtonProps = {
    onClick:(evt:Event) => void,
}

const ScrollButton = (props:ScrollButtonProps) => {
    const {
        onClick,
    } = props;

    return (
        <div className="scroll-button">
            <button onClick={ onClick }>
                <img src={ require('../../../styles/images/scroll_icn.png') } alt="Click to scroll down!"/>
            </button>
        </div>
    );
};

export default ScrollButton;
