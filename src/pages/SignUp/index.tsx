import React from "react";
import logo from '../../assets/images/logo.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {
    
    return(
        <section className="signUp">
            <img className="signUp-logo" src={ logo } alt="Logo" />
            <div className="signUp-header">
                <h1 className="header-title">Sign up</h1>
                <Link className="header-link" to="/">Already have an account</Link>
            </div>
            <form className="signUp-form">
                <Input type="text" placeholder="Define a username" />
                <Input type="password" placeholder="Set your password" />
                <Input type="password" placeholder="Email (optional)" />
                <Button title="Create account" />
            </form>
        </section>
    );
}
