/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:45 PM
 ===============================================*/

// @flow

export type homeState = {
    copy:copy,
    message:string,
}

export type copy = {
    [key:string]:string|Array<string>
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
