/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/2/18 1:31 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import type { copy, techNavConfig } from '../../modules/app/types';

import './Technologies.scss';
import Separator from '../__universal/Separator/Separator';
import PolylineNavigation from '../__universal/PolylineNavigation/PolylineNavigation';

type TechnologiesProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
    navConfig: techNavConfig,
}

class Technologies extends Component<TechnologiesProps> {
    render() {
        const {
            copy,
            navConfig,
        } = this.props;

        return(
            <section className="technologies">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'technologies_top' ] }
                    <Separator type='LONG'/>
                </h1>
                <div className="technologies-content">

                    <div className="info-box">

                    </div>
                    {
                        navConfig.length && <PolylineNavigation
                            initialPositions={ navConfig }/>
                    }
                </div>
            </section>
        );
    }
}

export default Technologies;
