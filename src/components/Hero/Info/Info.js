/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 11:48 PM
 ===============================================*/

import Separator from '../../Separator/Separator';
import React from 'react';
import animationContainer from '../../../utils/animationContainer';
import { heroPoses } from '../../../shared/poses.config';

import './Info.scss';

const TextBit = (props:{ copy:* }) => <h1 className="text-bit">
    {props.copy && props.copy.find(el => el.name === 'hero_top').text}
</h1>;

const Article = () => <article>
    <p>
        Theres a holdout in the Bronx, Brooklyns broken out in fights. Theres a traffic jam in Harlem thats backed up to Jackson Heights. Theres a Scout troop short a child, Khrushchevs due at Idelwyld... Car 54, where are you?
    </p>
    <p>
        They arrived in fifty mother ships, offering their friendship and advance technology to Earth. Skeptical of the visitors, Mike Donovan and Juliet Parrish infiltrated their ranks and soon discovered some startling secrets. The resistance is all that stands between us... and the visitors.
    </p>
</article>;


const AnimatedTextBit = animationContainer(TextBit);
const AnimatedSeparator = animationContainer(Separator);
const AnimatedArticle = animationContainer(Article);

type InfoProps = {
    copy:*;
    scrollPosition:number,
}

const Info = (props:InfoProps) => {
    const {
        copy,
        scrollPosition,
    } = props;

    return (
        <div className="info">
            <AnimatedTextBit
                copy={ copy }
                poses={ heroPoses.onMountInfoHeader }
                delay={ 800 }
                isMounted={ scrollPosition >= 0 }/>
            <AnimatedSeparator
                type='LONG'
                poses={ heroPoses.onMountInfoSeparator }
                delay={ 1000 }
                isMounted={ scrollPosition >= 0 }/>
            <AnimatedArticle
                poses={ heroPoses.onMountInfoPara }
                delay={ 1200 }
                isMounted={ scrollPosition >= 0 }/>
        </div>
    );
};

export default Info;
