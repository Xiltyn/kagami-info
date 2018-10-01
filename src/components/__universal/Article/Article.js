/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/16/18 1:54 AM
 ===============================================*/

import React, { Component } from 'react';

import './Article.scss';

type ArticleProps = {
    body:string,
    header:string,
    scrollPosition:number,
}

type ArticleState = {

}

class Article extends Component<ArticleProps, ArticleState> {

    render() {
        const {
            body,
            header,
            scrollPosition,
        } = this.props;

        return(
            <article
                style={ { transform: `translateY(${(scrollPosition) / 10}px)` } }>
                <h2>
                    { header }
                </h2>
                {
                    body.constructor === Array ?
                        body.map((paragraph:string, index:number) =>
                            <p key={ index }>
                                { paragraph }
                            </p>
                        ) :
                        <p>
                            { body }
                        </p>
                }
            </article>
        );
    }
}

export default Article;
