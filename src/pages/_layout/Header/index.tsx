import React from "react";
import logo from '../../../assets/images/logo.svg';

type headerType = {
    model: string,
}

export const Header = ({ ...props }: headerType) => {

    return(
        <header className={props.model+" flex flex--justify--space-between"}>
            {props.model === ""
                ? <img className="logo--large" src={ logo } alt="Logo" />
                : <>
                    <img className="logo--small" src={ logo } alt="Logo" />
                    {
                        props.model === "authenticatedWithButton" &&
                        <button>Teste</button>
                    }
                </>
            }
        </header>
    );
}
