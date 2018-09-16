/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 11:10 PM
 ===============================================*/

import { tween } from 'popmotion';

export const headerPoses = {
    onMount: {
        preEnter: {
            y: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            y: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
};

export const heroPoses = {
    onMountInfoHeader: {
        preEnter: {
            x: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
    onMountInfoSeparator: {
        preEnter: {
            x: '-300px',
            opacity: 0,
            delay: 200,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            delay: 200,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '-300px',
            opacity: 0,
            delay: 200,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
    onMountInfoPara: {
        preEnter: {
            x: '-300px',
            opacity: 0,
            delay: 400,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            delay: 400,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '-300px',
            opacity: 0,
            delay: 400,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
    onMountImagery: {
        preEnter: {
            x: '300px',
            opacity: 0,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '300px',
            opacity: 0,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
};

export const servicesPoses = {
    onMountMockup: {
        preEnter: {
            x: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '-300px',
            opacity: 0,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
    onMountArticle: {
        preEnter: {
            x: '300px',
            opacity: 0,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        enter: {
            x: 0,
            opacity: 1,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        exit: {
            x: '300px',
            opacity: 0,
            delay: 600,
            transition: (props:*) => tween({ ...props, duration: 800 }),
        },
        initialPose: 'preEnter',
    },
};

