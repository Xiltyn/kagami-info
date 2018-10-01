/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/1/18 1:04 AM
 ===============================================*/

// @flow

import React, { Component } from 'react';
import type { copy } from '../../modules/app/types';

import './Quality.scss';

type QualityProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
}

type QualityState = {
}

class Quality extends Component<QualityProps, QualityState> {
    render() {
        const {
            copy,
        } = this.props;

        return(
            <section className="quality">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'quality_top' ] }
                </h1>
                <div className="quality-content">

                </div>
            </section>
        );
    }
}

export default Quality;
