// ||  rws-app  ||
//
// Created @ 11:06 | 2018/06/27
// Powered by WebStorm
//
// ------------------------------
// |>   From jakubbujko with <3   <|
// ------------------------------

import { logger } from './logger';

const defaultOptions = {
    showLogs: false,
};

export const objectValuesPolyfill = (object, options = defaultOptions) => {
    const result = Object.keys(object).map(key => object[ key ]);

    if (options.showLogs) {
        logger('==> objectValuesPolyfill result :: ', 'warn', result);
    }

    return result;
};