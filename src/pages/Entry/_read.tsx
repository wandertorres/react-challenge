import React, { useContext, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { JournalContext } from '../../context/JournalContext';
import { MessageContext } from "../../context/MessageContext";
import { Header, EmptyList } from '../_layout';
import { Entry, SnackBar } from "../../components";

export const EntryReadAll = () => {
    const { entries, setEntries, journalName } = useContext(JournalContext);
    const { messageSuccess, setMessageError } = useContext(MessageContext);
    let { id }: any = useParams();
    let { url } = useRouteMatch();

    useEffect(() => {
        axios
            .get(`https://fuerza.test/journals/entries/${ id }`)
            .then((response) => setEntries(response.data.entries));
    }, [id, setEntries]);

    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);

    return (
        <main>
            { entries.length > 0 
            ? <>
                <Header size='--small' />
                <section className='entrieslist'>
                    <Header 
                        size='--small' 
                        nav={{title: journalName, to:"/journal"}}
                        button={{title:"+ Add note", to:`${ url }/create`}} />
                    <div className="entrieslist__container">
                        { entries.map((entry: any, i: number) => (
                            <Entry key={ i } title={ entry.title } content={ entry.content } />
                        )) }
                    </div>
                    { messageSuccess &&  <SnackBar type="success" messsage={ messageSuccess } /> }
                </section>
                </> : <>
                    <Header size='--small' />
                    <section>
                        <EmptyList listTitle={ journalName } path="posts/create" linkTitle='Create a note' />
                    </section>
                </>
            }
        </main> 
    );
}
