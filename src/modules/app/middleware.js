/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:42 PM
 ===============================================*/

import type { Dispatch } from '../../shared/redux.types';
import AppActions from './actions';

class AppMiddleware {
    static dispatchHello = (message:string) => (dispatch:Dispatch) => {
        const payload = {
            message: message,
        };

        dispatch(AppActions.setHelloMessage(payload));
    }
}

export default AppMiddleware;