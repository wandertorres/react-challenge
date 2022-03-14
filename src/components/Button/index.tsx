import React, { MouseEventHandler } from "react";

type buttonType = {
    title?: string;
    className: string;
    onClick?: MouseEventHandler;
}

export const Button = ({ ...props }: buttonType) => {
    
    return(
        <button className={ "button button"+props.className } onClick={ props.onClick }>
            { props.title }
        </button>
    );
}
