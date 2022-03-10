import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { SnackBar } from "../../components/SnackBar";
import { Header } from "../_layout/Header";

export const SignUp = () => {
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    let history = useHistory();

    const handleSignUp = () => {
        username && password
            ? axios
                .post('https://fuerza.test/auth/signup', {username, password, email})
                .then(() => history.push("/"))
                .catch(error => setMessage(error.response.data.data.message))
            : setMessage('Username and password are required');
    }
    
    return(
        <main>
            <Header model="" />
            <section className="signUp">
                <div className="signUp-header">
                    <h1 className="header-title">Sign up</h1>
                    <Link className="header-link" to="/">Already have an account</Link>
                </div>
                <form className="signUp-form">
                    <Input 
                        type="text" 
                        placeholder="Define a username"
                        onChange={(e) => setUserName((e.target as HTMLInputElement).value)} />
                    <Input 
                        type="password" 
                        placeholder="Set your password"
                        onChange={(e) => setPassword((e.target as HTMLInputElement).value)} />
                    <Input 
                        type="email" 
                        placeholder="Email (optional)"
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)} />
                    <Button 
                        type="primary"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignUp();
                        }} 
                        title="Create account" />
                    {message &&  <SnackBar type="error" messsage={message} />}
                </form>
            </section>
        </main>
    );
}
