/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:45 PM
 ===============================================*/

// @flow

export type homeState = {
    copy:Array<copy>,
    message:string,
}

export type copy = {
    name:string,
    text:string,
}
