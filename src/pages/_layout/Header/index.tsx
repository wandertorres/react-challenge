import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import logo from '../../../assets/images/logo.svg';

type headerType = {
    size: "--small" | "--large",
    nav?: {
        to: string,
        title: string
    },
    button?: {
        to: string,
        title: string
    }
}

export const Header = ({ ...props }: headerType) => {

    return(
        <header className={`header${ props.size } flex flex--justify--space-between`}>
            { props.nav
                ? <>
                    <Link className="nav__title" to={ props.nav.to }> {`< ${ props.nav.title }` }</Link>
                    {
                        props.button &&
                        <Link to={ props.button.to }>
                            <Button title={ props.button.title } className="--secundary"  />
                        </Link>
                    }
                </> 
                : <>
                    <img src={ logo } alt="Logo" />
                    { 
                        props.button && 
                        <Link to={ props.button.to }>
                            <Button title={ props.button.title } className="--secundary"  />
                        </Link> 
                    }
                </>
            }
        </header>
    );
}
