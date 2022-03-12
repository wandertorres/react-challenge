import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import logo from '../../../assets/images/logo.svg';

type headerType = {
    model?: string,
    link?: string,
    onClick?: MouseEventHandler;
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
                        <Link to="journal/create">
                            <Button title="+ Add journal" className="--secundary"  />
                        </Link>
                    }
                </>
            }
        </header>
    );
}
