/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/13/18 1:41 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import svg from '../../utils/svg';

import './Navigation.scss';

type NavigationProps = {

}

type NavigationState = {

}

class Navigation extends Component<NavigationProps, NavigationState> {

    render() {

        return (
            <nav className="navigation">
                <div className="svg-container menu-inner">
                    { svg.menu_inner }
                </div>
                <div className="svg-container menu-outer">
                    { svg.menu_outer }
                    <h3 className="text-bit text-bit-alt text-bit-alt--primary">
                        menu
                    </h3>
                </div>
            </nav>
        );
    }
}

export default Navigation;
