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
import svg from '../../utils/svg';

type QualityProps = {
    copy:copy,
    shouldAnimate:boolean,
    mousePosition:{x:number,y:number},
    nextSection:() => void,
}

type QualityState = {
    activeTabId:number,
}

class Quality extends Component<QualityProps, QualityState> {
    state = {
        activeTabId: 1,
    };

    render() {
        const {
            copy,
        } = this.props;

        const {
            activeTabId,
        } = this.state;

        return(
            <section className="quality">
                <h1 className="text-bit text-bit-alt text-bit-alt--default">
                    { copy[ 'quality_top' ] }
                </h1>
                <div className="quality-content">
                    <ul className="tabs-container">
                        {
                            copy.quality_tabs.map(el => (
                                <li
                                    key={ el.id }
                                    className={ `tab ${ el.id === activeTabId ? 'active' : '' }` }
                                    onMouseOver={ () => this.setState({ activeTabId: el.id }) }>
                                    <div className="tab-image">
                                        { svg.quality_icon_circle }
                                        <img src={ el.image } alt={ el.label }/>
                                    </div>
                                    <h3>
                                        { el.label }
                                    </h3>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="tab-description">
                        <p>
                            {
                                copy.quality_tabs.find(el => el.id === activeTabId).body
                            }
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quality;
