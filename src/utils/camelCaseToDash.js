/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 11:05 PM
 ===============================================*/

// @flow

import { logger } from './logger';

const camelCaseToDash = (string:string, options:{ debug:boolean } = { debug: false }) => {
    if(options.debug) {
        logger('==> camelCaseToDash.js |> string to parse :: ', 'INFO', string);
    }
    if(string) {
        const result = string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

        if(options.debug) {
            logger('==> camelCaseToDash.js |> string to parse :: ', 'INFO', result);
        }

        return result;
    }
};

export default camelCaseToDash;
