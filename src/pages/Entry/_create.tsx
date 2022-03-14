import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { JournalContext } from '../../context/JournalContext';
import { Header } from '../_layout';
import { Input, Button, SnackBar } from '../../components';

export const EntryCreate = () => {
    const { userId } = useContext(UserContext);
    const { journalName } = useContext(JournalContext);
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [message, setMessage] = useState<string>();
    let history = useHistory();
    let { id }: any = useParams();

    const handleCreateEntry = () => {
        axios.post(`https://fuerza.test/journals/entry/${ id }`, {
            title,
            content,
            userId,
        })
        .then(() => history.push(`/journal/${ id }/posts`))
        .catch((error) => setMessage(error.response.data.data.message));
    }
    
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
                { message && <SnackBar type="error" messsage={ message } /> }
            </section>
        </main>
    );
}
