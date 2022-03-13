import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { JournalContext } from "../../../context/JournalContext";
import { UserContext } from "../../../context/UserContext";
import { Header, EmptyList } from "../../_layout";
import { Journal } from "../../../components";

export const JournalList = () => {
    const { journals, setJournals, setJournalName } = useContext(JournalContext);
    const { userId } = useContext(UserContext);

    useEffect(() => {
        axios.get(`https://fuerza.test/journals/${ userId }`).then((response) => {
          setJournals(response.data.journals);
        });
    }, [setJournals, userId]);

    return(
        <main>
            { journals.length > 0
            ? <>
                <Header model="authenticatedWithButton" />
                <section className="journallist">
                    <div className="journallist__container">
                        {journals.map((journal) => (
                            <Link
                                to={ `journal/${journal.id}/posts` }
                                onClick={ () => setJournalName(journal.title) }
                                key={ journal.id }>
                                <Journal title={ journal.title } model="--grid" />
                            </Link>
                        ))}
                    </div>
                </section>
            </> 
            : <>
                <Header model="authenticated" />
                <section>
                    <EmptyList linkTitle="Create a journal" path="/journal/create" />
                </section>
            </> }
        </main>
    );
}
