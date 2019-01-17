/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/20/18 2:45 PM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import './ArrowNavigation.scss';

type ArrowNavigationProps = {
    handleNav: (prevId:number, type:'UP'|'DOWN') => void,
    config: {
        current: number,
        all: Array<number>,
        shouldLoop: boolean,
    }
}

class ArrowNavigation extends Component<ArrowNavigationProps> {
    navTypes = Object.freeze({
        UP: 'UP',
        DOWN: 'DOWN',
    });

    handleClick = (type:'UP'|'DOWN') => {
        const {
            handleNav,
            config: {
                all,
                current,
                shouldLoop,
            },
        } = this.props;

        const currentIndex = all.indexOf(current);

        if(type === 'UP') {
            if(shouldLoop && currentIndex === 0) {
                handleNav(all.pop(), type);
            } else if(currentIndex > 0) {
                handleNav(all[ currentIndex - 1 ], type);
            }
        } else if(type === 'DOWN') {
            if(shouldLoop && currentIndex === all.length - 1) {
                handleNav(all[ 0 ], type);
            } else if(currentIndex < all.length) {
                handleNav(all[ currentIndex + 1 ], type);
            }
        }

    };

    render = () => (
        <div className="arrow-nav-container">
            <div
                className="arrow up"
                onClick={ () => this.handleClick(this.navTypes.UP) }/>
            <div
                className="arrow down"
                onClick={ () => this.handleClick(this.navTypes.DOWN) }/>
        </div>
    );
}

export default ArrowNavigation;

