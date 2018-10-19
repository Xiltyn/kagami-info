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
    technology: {
        initialNavConfig: null,
    },
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
        quality_tabs: [
            {
                id: 1,
                label: 'SEO Driven',
                body: 'What ever happened to predictability? The milkman, the paperboy, evening TV. Everywhere you look, everywhere you go, there\'s a heart, a hand to hold onto. Everywhere you look, everywhere you go. There\'s a face of somebody who needs you. Everywhere you look, when you\'re lost out there and you\'re all alone, a light is waiting to carry you home, Everywhere you look. Everywhere you look.',
                image: require('../../styles/images/seo_driven.png'),
            },
            {
                id: 2,
                label: 'Safe & Secure',
                body: 'Dance your cares away, worry\'s for another day. Let the music play, down at Fraggle Rock! Work you cares away, dancing\'s for another day. Let the Fraggles play, We\'re Gobo, Mokey, Wembley, Boober, Red! Dance your cares away, worry\'s for another day. Let the music play, down at Fraggle Rock! Down at Fraggle Rock! Down at Fraggle Rock.',
                image: require('../../styles/images/secure.png'),
            },
            {
                id: 3,
                label: 'Complete Solutions',
                body: 'There is nothing wrong with your television set. Do not attempt to adjust the picture. We are controlling transmission. We will control the horizontal, we will control the vertical. We can change the focus to a soft blur or sharpen it to crystal clarity. For the next hour, sit quietly and we will control all that you see and hear. You are about to participate in a great adventure. You are about to experience the awe and mystery which reaches from the inner mind to the Outer Limits.',
                image: require('../../styles/images/complete_solutions.png'),
            },
            {
                id: 4,
                label: 'Mobile First',
                body: 'People let me tell you \'bout my best friend, he\'s a warm-hearted person who\'ll love me till the end. People let me tell you \'bout my best friend, he\'s a one boy cuddly toy, my up, my down, my pride and joy. People let me tell you \'bout him he\'s so much fun whether we\'re talkin\' man to man or whether we\'re talking son to son. Cause he\'s my best friend. Yes he\'s my best friend.',
                image: require('../../styles/images/mobile_friendly.png'),
            },
        ],
        technologies_top: 'Technologies',
    },
};

export default function AppReducer(state:homeState = initialState, action:() => void) {
    switch(action.type) {
    case AppActions.TYPES.SET_HELLO_MESSAGE:
        return state = {
            ...state,
            message: action.payload.message,
        };
    case AppActions.TYPES.SET_INITIAL_TECH_NAV_CONFIG:
        return state = {
            ...state,
            technology: {
                ...state.technology,
                initialNavConfig: action.payload,
            },
        };
    default:
        return state;
    }
}
