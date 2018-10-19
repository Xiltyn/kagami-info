/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/18/18 10:56 PM
 ===============================================*/

import type { techNavConfig } from '../modules/app/types';
import svg from '../utils/svg';

export const navConfig:techNavConfig = [
    {
        label: 'React',
        slug: 'react',
        icon: svg.react_icon,
    },
    {
        label: 'Node.js',
        slug: 'node',
        icon: svg.node_icon,
    },
    {
        label: 'Sass',
        slug: 'sass',
        icon: svg.sass_icon,
    },
    {
        label: 'Google Firebase',
        slug: 'firebase',
        icon: svg.firebase_icon,
    },
    {
        label: 'MongoDB',
        slug: 'mongo',
        icon: svg.mongo_icon,
    },
];
