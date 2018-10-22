/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:42 PM
 ===============================================*/

import type { Dispatch } from '../../shared/redux.types';
import AppActions from './actions';
import type { techNavConfig } from './types';
import { logger } from '../../utils/logger';
import { TechnologiesList } from './models';

class AppMiddleware {
    static dispatchHello = (message:string) => (dispatch:Dispatch) => {
        const payload = {
            message: message,
        };

        dispatch(AppActions.setHelloMessage(payload));
    };

    static spawnNavigationPoints = (config:techNavConfig) => (dispatch:Dispatch) => {
        if(config) {
            const payload = new TechnologiesList(config);

            logger('==> Technologies.js > spawnNavigationPoints |> result :: ', 'IMPORTANT', payload);

            dispatch(AppActions.setInitialTechNavConfig(payload));
        }
    };
}

export default AppMiddleware;
