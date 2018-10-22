/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 10/20/18 6:36 PM
 ===============================================*/

// @flow

import { rect } from '../../shared/genericModels';
import type { techNavConfig, techNavElement } from './types';

type technology = {
    id?:number,
    name:string,
    text:Array<string>,
    slug?:string,
    icon?:HTMLElement,
}

export class TechnologiesList {
    data:Array<technology> = [];
    static latestId:number;

    constructor(data:Array<Object>) {
        if(data) {
            data.map(el => {
                if(!el.id) {
                    el.id = TechnologiesList.incrementId();
                }

                if (!el.slug && el.name) {
                    el.slug = el.name.toLowerCase();
                }

                this.data.push(el);
            });
        }
    }

    get techNavConfig():techNavConfig {
        return this.data.map((el:Object, index):techNavElement => {
            const initialX = Math.floor(Math.random() * (90 - 30) + 30);
            const initialY = 50 * index;

            el.coords = new rect(initialX, initialY);

            return {
                id: el.id,
                label: el.name,
                slug: el.slug ? el.slug : '',
                icon: el.icon,
                coords: el.coords,
            };
        });
    }


    static incrementId():number {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }

        return this.latestId;
    }

}
