import React from 'react';

type entrieProps = {
    title: string;
    content?: string;
    type?: 'fullwidth' | undefined;
};

export const Entrie = ({ ...props }: entrieProps) => {
    return (
        <div className={ `article ${props.type === 'fullwidth' ? 'article--fullwidth' : ''}` }>
            <div className="article-container">
                <p className="article--title">{ props.title }</p>
                { props.content && <p className="article--content">{ props.content }</p> }
            </div>
        </div>
    );
}
