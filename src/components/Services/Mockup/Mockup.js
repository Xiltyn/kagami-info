/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 2:30 AM
 ===============================================*/

import React, { Component } from 'react';
import { logger } from '../../../utils/logger';
import type { project } from '../../../modules/app/types';

import './Mockup.scss';

type MockupProps = {
    showcase:project,
}

type MockupState = {

}

class Mockup extends Component<MockupProps, MockupState> {

    render() {
        const {
            showcase,
        } = this.props;

        logger('==> Mockup.js |> this.props.showcase :: ', 'INFO', showcase);

        return(
            <div className="services-mockup">
                <div className="showcase-container">
                    <img src={ require(`../../../styles/images/${showcase.images.layout}`) } alt=""/>
                </div>
            </div>
        );
    }
}

export default Mockup;
