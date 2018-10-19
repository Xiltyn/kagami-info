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

class AppMiddleware {
    static dispatchHello = (message:string) => (dispatch:Dispatch) => {
        const payload = {
            message: message,
        };

        dispatch(AppActions.setHelloMessage(payload));
    };

    static spawnNavigationPoints = (config:techNavConfig) => (dispatch:Dispatch) => {
        if(config) {
            let result = [];

            logger('==> Technologies.js > spawnNavigationPoints |> config :: ', 'IMPORTANT', config);

            config.map((el, index) => {
                const initialX = Math.floor(Math.random() * (90 - 30) + 30);
                const initialY = 50 * index;

                if(!el.id) {
                    el.id = index;
                }

                el = {
                    ...el,
                    coords: {
                        x: initialX,
                        y: initialY,
                    },
                };

                logger('==> Technologies.js > spawnNavigationPoints |> for loop element :: ', 'IMPORTANT', el);

                result = [ ...result, el ];
            });

            logger('==> Technologies.js > spawnNavigationPoints |> result :: ', 'IMPORTANT', result);

            dispatch(AppActions.setInitialTechNavConfig(result));
        }
    };
}

export default AppMiddleware;
