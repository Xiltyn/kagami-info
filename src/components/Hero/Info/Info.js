/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 11:48 PM
 ===============================================*/

import Separator from '../../__universal/Separator/Separator';
import React from 'react';
import animationContainer from '../../../utils/animationContainer';
import { heroPoses } from '../../../shared/poses.config';
import type { copy } from '../../../modules/app/types';

import './Info.scss';

const TextBit = (props:{ copy:* }) => <h1 className="text-bit">
    {props.copy[ 'hero_top' ]}
</h1>;

const Description = (props:{ copy:* }) => <article>
    {
        props.copy[ 'hero_article' ].constructor === Array ?
            props.copy[ 'hero_article' ].map((paragraph:string, index:number) =>
                <p key={ index }>
                    { paragraph }
                </p>
            ) :
            <p>
                { props.copy[ 'hero_article' ] }
            </p>
    }
</article>;


const AnimatedTextBit = animationContainer(TextBit);
const AnimatedSeparator = animationContainer(Separator);
const AnimatedDescription = animationContainer(Description);

type InfoProps = {
    copy:copy;
    shouldAnimate:boolean,
}

const Info = (props:InfoProps) => {
    const {
        copy,
        shouldAnimate,
    } = props;

    return copy &&
        <div className="info">
            <AnimatedTextBit
                copy={ copy }
                poses={ heroPoses.onMountInfoHeader }
                delay={ 800 }
                isMounted={ shouldAnimate }/>
            <AnimatedSeparator
                type='LONG'
                poses={ heroPoses.onMountInfoSeparator }
                delay={ 1000 }
                isMounted={ shouldAnimate }/>
            <AnimatedDescription
                copy={ copy }
                poses={ heroPoses.onMountInfoPara }
                delay={ 1200 }
                isMounted={ shouldAnimate }/>
        </div>;
};

export default Info;
