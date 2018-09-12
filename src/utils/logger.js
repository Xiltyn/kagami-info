// ||  rws-app  ||
//
// Created @ 10:56 | 2018/06/27
// Powered by WebStorm
//
// ------------------------------
// |>   From jakubbujko with <3   <|
// ------------------------------


const color = {
    SUCCESS: '#21B764',
    ERROR: '#FF595E',
    WARN: '#ffa600',
    PROCESS: '#6457a6',
    INFO: '#272838',
    IMPORTANT: '#e10ca1',
    BACKGROUND: '#EDEEF9',
};

const status = {
    INFO: 'color: ' + color.INFO + '; font-weight: 100; background-color: ' + color.BACKGROUND,
    ERROR: 'color: ' + color.ERROR + '; font-weight: 600; background-color: ' + color.BACKGROUND,
    SUCCESS: 'color: ' + color.SUCCESS + '; font-weight: 600; background-color: ' + color.BACKGROUND,
    PROCESS: 'color: ' + color.PROCESS + '; font-weight: 300; background-color: ' + color.BACKGROUND,
    WARN: 'color: ' + color.WARN + '; font-weight: 300; background-color: ' + color.BACKGROUND,
    IMPORTANT: 'color: ' + color.IMPORTANT + '; font-weight: 800; letter-spacing: .1rem; background-color: ' + color.BACKGROUND,
};

export const getConsoleStyles = style => status[ style ].toString();

export const logger = (message, style, payload) => {
    if (process.env.NODE_ENV === 'development') {
        return console.log('%c' + message + (payload ? typeof payload === 'string' ? '%s' : '' : ''),
            getConsoleStyles(style), payload ? payload : '');
    }
};
