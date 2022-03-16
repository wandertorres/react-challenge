import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { MessageContext } from "../../context/MessageContext";
import { Header } from "../_layout";
import { Button, Input, SnackBar } from "../../components";

export const SignIn = () => {
    const { setUserId, setIsLogged } = useContext(UserContext);
    const { messageSuccess, messageError, setMessageError } = useContext(MessageContext);
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    let history = useHistory();

    const handleSignIn = () => {
        axios.post('https://fuerza.test/auth/login', {username, password})
            .then((response) => {
                setUserId(response.data.user.id);
                setIsLogged(true);
                history.push('/journal')
            })
            .catch(error => setMessageError(error.response.data.data.message))
    }
    
    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);

    return(
        <main>
            <Header size="--large" />
            <section className="flex flex--column">
                <div className="header flex flex--justify--space-between flex--align--baseline">
                    <h1>Sign in</h1>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <form className="signin-form flex flex--column flex--align--center">
                    <Input 
                        type="text" 
                        placeholder="Define a username"
                        onChange={(e) => setUserName((e.target as HTMLInputElement).value)} />
                    <Input 
                        type="password" 
                        placeholder="Set your password"
                        onChange={(e) => setPassword((e.target as HTMLInputElement).value)} />
                    <a className="form-link" href="#link">Forgot password?</a>
                    <Button
                        className="--primary flex flex--justify--center flex--align--center"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignIn();
                        }} 
                        title="Log in" />
                </form>
                { messageError &&  <SnackBar type="error" messsage={ messageError } /> }
                { messageSuccess &&  <SnackBar type="success" messsage={ messageSuccess } /> }
            </section>
        </main>
    );
}
