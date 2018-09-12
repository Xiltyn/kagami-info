/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/11/18 11:40 PM
 ===============================================*/

import type { homeState } from '../modules/app/types';

export type State = {
    app:homeState,
}
export type Dispatch = (action: any) => void;
export type GetState = () => State;