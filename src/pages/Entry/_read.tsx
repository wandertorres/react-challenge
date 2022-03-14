import React, { useContext, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { JournalContext } from '../../context/JournalContext';
import { Header, EmptyList } from '../_layout';
import { Entry } from "../../components";

export const EntryReadAll = () => {
    const { entries, setEntries, journalName } = useContext(JournalContext);
    let { id }: any = useParams();
    let { url } = useRouteMatch();

    useEffect(() => {
        axios
            .get(`https://fuerza.test/journals/entries/${ id }`)
            .then((response) => setEntries(response.data.entries));
    }, [id, setEntries]);

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
                    <div className="entrieslist__container flex flex--column">
                        <div className="flex flex--row flex--justify--space-between flex--wrap">
                            { entries.map((entry: any, i: number) => (
                                <Entry key={ i } title={ entry.title } content={ entry.content } />
                            )) }
                        </div>
                    </div>
                </section>
                </> : <>
                    <Header size='--small' />
                    <section>
                        <EmptyList path="posts/create" linkTitle='Create a note' />
                    </section>
                </>
            }
        </main> 
    );
}
