/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:45 PM
 ===============================================*/

// @flow

import { TechnologiesList } from './models';

export type homeState = {
    copy:copy,
    message:string,
    technologiesList: TechnologiesList|null,
}

export type copy = {
    [key:string]:*
}

export type project = {
    title:string,
    description:string|Array<string>,
    images:{
        thumbnail:string,
        full:string,
        layout:string,
    }
}

export type techNavElement = {
    id?:number,
    label:string,
    slug:string,
    icon?:*,
    coords: {x:number, y:number},
};

export type techNavConfig = Array<techNavElement>
