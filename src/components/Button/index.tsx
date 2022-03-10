import React, { MouseEventHandler } from "react";

type buttonType = {
    title: string;
    type: string;
    onClick?: MouseEventHandler;
}

export const Button = ({ ...props }: buttonType) => {
    
    return(
        <button className={"button "+props.type} onClick={ props.onClick }>{props.title}</button>
    );
}
