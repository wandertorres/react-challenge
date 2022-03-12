import React from 'react';

type ArticleProps = {
    title: string;
    content?: string;
    type?: 'fullwidth' | undefined;
};

export const Article = ({ title, content, type }: ArticleProps) => {
    return (
        <div className={ `article ${type === 'fullwidth' ? 'article--fullwidth' : ''}` }>
            <div className="article-container">
                <p className="article--title">{ title }</p>
                { content && <p className="article--content">{ content }</p> }
            </div>
        </div>
    );
}
