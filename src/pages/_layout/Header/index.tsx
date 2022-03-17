import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import logo from '../../../assets/images/logo.svg';
import back from '../../../assets/images/back.svg';

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
        <header className={`header${ props.size } flex flex--justify--space-between flex--align--center`}>
            { props.nav
                ? <>
                    <Link className="nav__title" to={ props.nav.to }>
                        <img className="back" src={ back } alt="Back" />{`${ props.nav.title }` 
                    }</Link>
                    {
                        props.button &&
                        <Link to={ props.button.to }>
                            <Button title={ props.button.title } className="--secundary"  />
                        </Link>
                    }
                </> 
                : <>
                    <img className="logo" src={ logo } alt="Logo" />
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
