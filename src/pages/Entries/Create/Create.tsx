import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import { JournalContext } from '../../../context/JournalContext';
import { Header } from '../../_layout';
import { Input, Button } from '../../../components';

export default function EntriesCreate() {
    const { userId } = useContext(UserContext);
    const { journalName } = useContext(JournalContext);
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    let history = useHistory();
    let { id }: any = useParams();

    return (
        <section className="background">
            <Header model="autenticated" />
            <div className="flex flex--column">
                <Link className="navigation" to={`/journal/${ id }/posts`}>{`< ${ journalName }`}</Link>
                <div className="flex flex--column">
                    <Input
                        type="text"
                        onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
                        placeholder="Title" />
                    <textarea
                        rows={10}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write">
                    </textarea>
                    <Button
                        title="Save note"
                        className="--primary"
                        onClick={() => {
                          axios
                            .post(`https://fuerza.test/journals/entry/${id}`, {
                              title,
                              content,
                              userId,
                            })
                            .then(() => history.push(`/journal/${id}/posts`))
                            .catch((error) => console.log(error));
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
