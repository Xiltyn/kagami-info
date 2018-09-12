/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:45 PM
 ===============================================*/

// @flow

import type { homeState } from './types';
import AppActions from './actions';

const initialState = {
    message: '',
    copy: [
        {
            name: 'hero_top',
            text: 'Digital Perfection',
        },
    ],
};

export default function AppReducer(state:homeState = initialState, action:() => void) {
    switch(action.type) {
    case AppActions.TYPES.SET_HELLO_MESSAGE:
        return state = {
            ...state,
            message: action.payload.message,
        };
    default:
        return state;
    }
}
