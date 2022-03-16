import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { JournalContext } from '../../context/JournalContext';
import { MessageContext } from "../../context/MessageContext";
import { Header } from '../_layout';
import { Input, Button, SnackBar } from '../../components';

export const EntryCreate = () => {
    const { userId } = useContext(UserContext);
    const { journalName } = useContext(JournalContext);
    const { messageError, setMessageSuccess, setMessageError } = useContext(MessageContext);
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    let history = useHistory();
    let { id }: any = useParams();

    const handleCreateEntry = () => {
        title && content
        ? axios.post(`https://fuerza.test/journals/entry/${ id }`, {
            title,
            content,
            userId,
        })
        .then(() => {
            history.push(`/journal/${ id }/posts`)
            setMessageSuccess("Note created successfully");
        })
        .catch((error) => setMessageError(error.response.data.data.message))
        : setMessageError("Title and content are required");
    }

    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);
    
    return (
        <main>
            <Header size='--small' />
            <section className='entryRead'>
                <Header size='--small' nav={{title:journalName, to:`/journal/${ id }/posts`}} />
                <form className="flex flex--column flex--align--center">
                    <Input
                        type="text"
                        onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
                        placeholder="Title" />
                    <textarea
                        rows={10}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your note" />
                    <Button
                        title="Save note"
                        className="--primary"
                        onClick={(e) => {
                            e.preventDefault();
                            handleCreateEntry();
                        }}
                    />
                </form>
                { messageError && <SnackBar type="error" messsage={ messageError } /> }
            </section>
        </main>
    );
}
