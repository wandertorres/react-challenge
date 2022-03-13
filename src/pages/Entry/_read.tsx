import React, { useContext, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
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
            .get(`https://fuerza.test/journals/entries/${id}`)
            .then((response) => setEntries(response.data.entries));
    }, [id, setEntries]);

    return (
        <main>
            { entries.length > 0 
            ? <>
                <Header titleButton='+ Add note' model="authenticatedWithButton" />
                <section className='entrieslist'>
                    <div className="entrieslist__container flex flex--column">
                        <Link className="navigation" to={`/journal`}>
                            {`< ${ journalName }`}
                        </Link>
                        <div className="flex flex--row flex--justify--space-between flex--wrap">
                            { entries.map((entry: any, i: number) => (
                                <Link
                                    className="entries--create--entry"
                                    key={ i }
                                    to={`${ url }/view/${ i }`}>
                                    <Entry key={ i } title={ entry.title } content={ entry } />
                                </Link>
                            )) }
                        </div>
                    </div>
                </section>
                </> : <>
                    <Header titleButton="+ Add note" model="authenticated" />
                    <section>
                        <EmptyList path="posts/create" linkTitle='Create a note' />
                    </section>
                </>
            }
        </main> 
    );
}

export const EntryReadOne = () => {
    const { journalName, entries } = useContext(JournalContext);
    let { id, entryId }: any = useParams();

    return (
        <section className="background">
            <Header model="authenticated" />
              <div className="flex flex--column">
                  <Link className="navigation" to={ `/journal/${id}/posts` }>{ `< ${ journalName }` }</Link>
                  <div className="flex flex--column">
                      <Entry
                        title={(entries[entryId] as any).title}
                        content={(entries[entryId] as any).content}
                        model="fullwidth"
                      />
                </div>
            </div>
        </section>
    );
}
