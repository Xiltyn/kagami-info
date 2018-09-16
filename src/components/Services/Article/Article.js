/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:54 AM
 ===============================================*/

import React, { Component } from 'react';
import type { copy } from '../../../modules/app/types';

import './Article.scss';

type ArticleProps = {
    copy:copy,
}

type ArticleState = {

}

class Article extends Component<ArticleProps, ArticleState> {

    render() {
        const {
            copy,
        } = this.props;

        return(
            <article className="services-article">
                <h2>
                    { copy[ 'services_article_header' ] }
                </h2>
                {
                    copy[ 'services_article_body' ].constructor === Array ?
                        copy[ 'services_article_body' ].map((paragraph:string, index:number) =>
                            <p key={ index }>
                                { paragraph }
                            </p>
                        ) :
                        <p>
                            { copy[ 'services_article_body' ] }
                        </p>
                }
            </article>
        );
    }
}

export default Article;
