import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { Header } from "../../_layout";
import { Input, Button, SnackBar, Journal } from "../../../components";

export const JournalCreate = () => {
    const { userId } = useContext(UserContext);
    const [title, setTitle] = useState<string>();
    const [message, setMessage] = useState<string>();
    let history = useHistory();

    const handleJournalCreate = () => {
        title 
        ? axios
            .post('https://fuerza.test/journals/', { title, userId})
            .then(() => history.push('/journal'))
            .catch((error) => setMessage(error.response.data.data.message))
        : setMessage("Title cannot be empty");
    }

    return(
        <main>
            <Header model="authenticated" />
            <section className="flex flex--column">
                <Journal title={ title } model="big" />
                <form className="flex flex--column flex--align--center">
                    <Input 
                        type="text" 
                        placeholder="Define a title"
                        onChange={(e) => setTitle((e.target as HTMLInputElement).value)} />
                    <Button
                        className="--primary"
                        onClick={(e) => {
                            e.preventDefault();
                            handleJournalCreate();
                        }} 
                        title="Save journal" />
                </form>
                { message &&  <SnackBar type="error" messsage={ message } /> }
            </section>
        </main>
    );
}
