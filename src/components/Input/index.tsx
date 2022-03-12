import React, { ChangeEventHandler } from "react";

type inputType = {
    placeholder: string,
    type: string,
    onChange: ChangeEventHandler;
}

export const Input = ({ ...props }: inputType) => {
    
    return(
        <input className="input" type={ props.type } placeholder={ props.placeholder } onChange={ props.onChange } />            
    );
}
