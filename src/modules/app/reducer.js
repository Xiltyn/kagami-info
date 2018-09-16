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
    copy: {
        hero_top: 'Digital Perfection',
        hero_article: [
            'Theres a holdout in the Bronx, Brooklyns broken out in fights. Theres a traffic jam in Harlem thats backed up to Jackson Heights. Theres a Scout troop short a child, Khrushchevs due at Idelwyld... Car 54, where are you?',
            'They arrived in fifty mother ships, offering their friendship and advance technology to Earth. Skeptical of the visitors, Mike Donovan and Juliet Parrish infiltrated their ranks and soon discovered some startling secrets. The resistance is all that stands between us... and the visitors.',
        ],
        services_top: 'services',
        services_article_header: 'Full Stack Development',
        services_article_body: [
            'Moon over Parma, bring my love to me tonight. Guide her to Cleveland, underneath your silvery light. We\'re going bowlin\' so don\'t lose her in Solon. Moon over Parma, tonight!\n',
            'I bet we been together for a million years, And I bet we\'ll be together for a million more. Oh, It\'s like I started breathing on the night we kissed, and I can\'t remember what I ever did before. What would we do baby, without us? What would we do baby, without us? And there ain\'t no nothing we can\'t love each other through. What would we do baby, without us? Sha la la la.',
        ],
    },
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
