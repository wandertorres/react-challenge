import React from "react";
import logo from '../../assets/images/logo.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const SignIn = () => {
    
    return(
        <section className="signIn">
            <img className="signIn-logo" src={ logo } alt="Logo" />
            <div className="signIn-header">
                <h1 className="header-title">Sign In</h1>
                <Link className="header-link" to="/signup">Sign Up</Link>
            </div>
            <form className="signIn-form">
                <Input onChange={()=>{}} type="text" placeholder="Your username" />
                <Input onChange={()=>{}} type="password" placeholder="Your password" />
                <a className="form-link" href="/">Forgot password?</a>
                <Button title="Log in" />
            </form>
        </section>
    );
}
