import React, { useContext, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { JournalContext } from '../../../context/JournalContext';
import { Header, EmptyList } from '../../_layout';
import { Article } from "../../../components";
import '../entries.scss';

export default function EntriesList() {
    const { entries, setEntries, journalName } = useContext(JournalContext);
    let { id }: any = useParams();
    let { url } = useRouteMatch();

    useEffect(() => {
        axios
            .get(`https://fuerza.test/journals/entries/${id}`)
            .then((response) => setEntries(response.data.entries));
    }, [id, setEntries]);

    if (entries.length > 0) {
        return (
            <section className="background">
                <Header model="autenticatedWithButton" />
                <div className="flex flex--column">
                    <Link className="navigation" to={`/journal`}>
                        {`< ${journalName}`}
                    </Link>
                    <div className="flex flex--row flex--justify--space-between flex--wrap">
                        {entries.map((entry: any, i: number) => (
                            <Link
                                className="entries--create--entry"
                                key={i}
                                to={`${url}/view/${i}`}>
                            <Article key={i} title={entry.title} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        );
    } else {
        return <EmptyList path="posts/create" linkTitle='Link aqui' />;
    }
}
