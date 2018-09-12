/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:43 PM
 ===============================================*/

// @flow

class AppActions {
    static TYPES = Object.freeze({
        SET_HELLO_MESSAGE: 'SET_HELLO_MESSAGE',
    });

    static setHelloMessage = (payload:{message:string}) => ({
        type: AppActions.TYPES.SET_HELLO_MESSAGE,
        payload: payload,
    })
}

export default AppActions;
