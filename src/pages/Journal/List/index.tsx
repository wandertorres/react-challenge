import React, { useContext, useEffect } from "react";
import { Header } from "../../_layout/Header";
import { EmptyList } from "../../_layout/EmptyList";
import { JournalContext } from "../../../context/JournalContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { Journal } from "../../../interfaces/journal.interface";

export const JournalList = () => {
    const { journals, setJournals, setJournalName } = useContext(JournalContext);
    const { userId } = useContext(UserContext);

    useEffect(() => {
        axios.get(`https://fuerza.test/journals/${userId}`).then((response) => {
          setJournals(response.data.journals);
        });
    }, [setJournals, userId]);

    return(
        <main>
            {
                journals.length > 0
                ? <>
                    <Header model="authenticatedWithButton" />
                    <section className="journalList flex flex--justify--space-between flex-wrap">
                        {journals.map((journal: Journal) => (
                            <Link
                                to={`journal/${journal.id}/posts`}
                                onClick={() => setJournalName(journal.title)}
                                key={journal.id}>
                                <h4 className="title">{ journal.title }</h4>
                            </Link>
                        ))}
                    </section>
                </> 
                : <>
                    <Header model="authenticated" />
                    <section className="">
                        <EmptyList linkTitle="Create a journal" path="/journal/create" />
                    </section>
                </> 
            }
        </main>
    );
}
