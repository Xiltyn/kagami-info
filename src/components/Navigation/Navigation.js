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
    positionTop:number,
    scrollTo:(id:number) => void,
}

type NavigationState = {

}

class Navigation extends Component<NavigationProps, NavigationState> {

    render() {
        const {
            positionTop,
            scrollTo,
        } = this.props;

        const navConfig = [
            {
                id: 1,
                label: 'Top',
            },
            {
                id: 2,
                label: 'Services',
            },
            {
                id: 3,
                label: 'Seo',
            },
            {
                id: 4,
                label: 'Native Apps',
            },
            {
                id: 5,
                label: 'Quality',
            },
            {
                id: 6,
                label: 'Technologies',
            },
            {
                id: 7,
                label: 'Contact',
            },
        ];

        return (
            <nav
                className="navigation"
                style={ {
                    top: positionTop,
                } }>
                <div className="svg-container menu-inner">
                    { svg.menu_inner }
                </div>
                <div className="svg-container menu-outer">
                    { svg.menu_outer }
                    <h3 className="text-bit text-bit-alt text-bit-alt--primary">
                        menu
                    </h3>
                </div>
                <ul>
                    {
                        navConfig.map((el, index) =>
                            <li key={ index } onClick={ () => scrollTo(el.id) }>
                                { el.label }
                            </li>
                        )
                    }
                </ul>
            </nav>
        );
    }
}

export default Navigation;
