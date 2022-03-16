import React from 'react';

type entryProps = {
    title: string;
    content?: string;
};

export const Entry = ({ ...props }: entryProps) => {
    return (
        <div className='entry__container'>
            <div className='entry__title'>
                <h4>{ props.title }</h4>
            </div>
        </div>
    );
}
