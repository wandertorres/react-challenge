import React, { MouseEventHandler } from "react";

type buttonType = {
    title: string;
    onClick?: MouseEventHandler;
}

export const Button = ({title, onClick}: buttonType) => {
    
    return(
        <button className="button" onClick={ onClick }>{title}</button>
    );
}
