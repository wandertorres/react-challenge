import React, { useContext, useEffect } from "react";
import { Header } from "../../_layout/Header";
import { EmptyList } from "../../_layout/EmptyList";
import { JournalContext } from "../../../context/JournalContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";

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
            <Header model="authenticated" />
            {
                journals.length > 0
                ? journals.map((l: any, i: number) => (
                    <Link
                    to={`journal/${l.id}/posts`}
                    onClick={() => setJournalName(l.title)}
                    key={i}
                  >
                    <span>{ l.title }</span>
                  </Link>
                  ))
                : <section className="">
                    <EmptyList linkTitle="Create a journal" path="/journal/create" />
                </section>
            }
        </main>
    );
}
