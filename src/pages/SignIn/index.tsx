import React, { useContext, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { SnackBar } from "../../components/SnackBar";
import { Header } from "../_layout/Header";
import { UserContext } from "../../context/UserContext";

export const SignIn = () => {
    const { setUserId } = useContext(UserContext);
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [message, setMessage] = useState<string>();
    let history = useHistory();

    const handleSignIn = () => {
        axios.post('https://fuerza.test/auth/login', {username, password})
            .then((response) => {
                setUserId(response.data.user.id);
                history.push('/journal')
            })
            .catch(error => setMessage(error.response.data.data.message))
    }
    
    return(
        <main>
            <Header model="" />
            <section className="signIn">
                <div className="signIn-header">
                    <h1 className="header-title">Sign In</h1>
                    <Link className="header-link" to="/signup">Sign Up</Link>
                </div>
                <form className="signIn-form">
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
                        type="primary"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignIn();
                        }} 
                        title="Log in" />
                    {message &&  <SnackBar type="error" messsage={message} />}
                </form>
            </section>
        </main>
    );
}
