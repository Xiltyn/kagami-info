/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:43 PM
 ===============================================*/

// @flow

import { TechnologiesList } from './models';

class AppActions {
    static TYPES = Object.freeze({
        SET_HELLO_MESSAGE: 'SET_HELLO_MESSAGE',
        SET_INITIAL_TECH_NAV_CONFIG: 'SET_INITIAL_TECH_NAV_CONFIG',
    });

    static setHelloMessage = (payload:{message:string}) => ({
        type: AppActions.TYPES.SET_HELLO_MESSAGE,
        payload: payload,
    });

    static setInitialTechNavConfig = (payload:TechnologiesList) => ({
        type: AppActions.TYPES.SET_INITIAL_TECH_NAV_CONFIG,
        payload: payload,
    })

}

export default AppActions;
