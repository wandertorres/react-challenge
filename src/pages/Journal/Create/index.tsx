import React, { useContext, useState } from "react";
import { Header } from "../../_layout/Header";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { SnackBar } from "../../../components/SnackBar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

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
            <section className="journalCreate flex flex--column flex--align--center">
                <h3>{title}</h3>
                <Input 
                    type="text" 
                    placeholder="Define a title"
                    onChange={(e) => setTitle((e.target as HTMLInputElement).value)} />
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        handleJournalCreate();
                    }} 
                    title="Save journal" />
                {message &&  <SnackBar type="error" messsage={message} />}
            </section>
        </main>
    );
}
