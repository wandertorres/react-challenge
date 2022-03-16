import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { MessageContext } from "../../context/MessageContext";
import { Header } from "../_layout";
import { Input, Button, SnackBar, Journal } from "../../components";

export const JournalCreate = () => {
    const { userId } = useContext(UserContext);
    const { messageError, setMessageSuccess, setMessageError } = useContext(MessageContext);
    const [title, setTitle] = useState<string>();
    let history = useHistory();

    const handleJournalCreate = () => {
        title 
        ? axios
            .post('https://fuerza.test/journals/', { title, userId})
            .then(() => {
                history.push('/journal')
                setMessageSuccess("Journal created successfully");
            })
            .catch((error) => setMessageError(error.response.data.data.message))
        : setMessageError("Title cannot be empty");
    }

    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);

    return(
        <main>
            <Header size="--small" />
            <section className="journalcreate flex flex--column">
                <Journal title={ title } />
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
                { messageError &&  <SnackBar type="error" messsage={ messageError } /> }
            </section>
        </main>
    );
}
