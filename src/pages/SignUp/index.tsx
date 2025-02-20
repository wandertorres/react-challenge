import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { MessageContext } from "../../context/MessageContext";
import { Header } from "../_layout";
import { Input, Button, SnackBar } from "../../components";

export const SignUp = () => {
    const { messageError, setMessageSuccess, setMessageError } = useContext(MessageContext);
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    let history = useHistory();

    const handleSignUp = () => {
        username && password
            ? axios
                .post('https://fuerza.test/auth/signup', {username, password, email})
                .then(() => {
                    history.push("/");
                    setMessageSuccess("User created successfully");
                })
                .catch(error => setMessageError(error.response.data.data.message))
            : setMessageError('Username and password are required');
    }

    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);
    
    return(
        <main>
            <Header size="--large" />
            <section className="flex flex--column">
                <div className="header flex flex--justify--space-between flex--align--baseline">
                    <h1>Sign up</h1>
                    <Link className="header-link" to="/">Already have an account</Link>
                </div>
                <form className="flex flex--column flex--align--center">
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
                        className="--primary flex flex--justify--center flex--align--center"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignUp();
                        }} 
                        title="Create account" />
                </form>
                { messageError &&  <SnackBar type="error" messsage={ messageError } /> }
            </section>
        </main>
    );
}
