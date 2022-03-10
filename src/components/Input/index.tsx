import React, { ChangeEventHandler } from "react";

type inputType = {
    placeholder: string,
    type: string,
    onChange: ChangeEventHandler;
}

export const Input = ({placeholder, type, onChange}: inputType) => {
    
    return(
        <input className="input" type={ type } placeholder={ placeholder } onChange={ onChange } />            
    );
}
