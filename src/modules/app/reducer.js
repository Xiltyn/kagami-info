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
        seo_article_header: 'Search Engine Optimization',
        seo_article_body: [
            'Our whole universe was in a hot dense state, then nearly fourteen billion years ago expansion started. Wait... The Earth began to cool, the autotrophs began to drool. Neanderthals developed tools, we built a wall (we built the pyramids). Math, science, history, unraveling the mysteries, that all started with the big bang!',
            'My kinda people, my kinda place. There\'s something special about this place. Got no reason to stray too far, \'cause it\'s all right here in my own backyard! This is a Burger King town, it\'s made just for me! This is a Burger King town, we know how burgers should be! Right up the road, left at the sign. My way, your way, one at a time, hot off the fire with anything on it! And don\'t it feel good when it\'s just how you want it? This is a Burger King town, it\'s made just for me! This is a Burger King town, we know how burgers should be!',
        ],
        native_article_header: 'Native Mobile Apps',
        native_article_body: [
            'They\'re creepy and they\'re kooky, mysterious and spooky. They\'re all together ooky, the Addams Family. Their house is a museum where people come to see \'em. They really are a scream, the Addams Family. Neat. Sweet. Petite. So get a witches shawl on, a broomstick you can crawl on. We\'re gonna pay a call on the Addams Family.',
            'Making the world a better place, starts with one more smiling face. And Ronald\'s smile is just the thing, To make everybody sing! Put a smile on, put a smile on, everybody come on! Put a smile on!',
        ],
        quality_top: 'Quality & Performance',
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
