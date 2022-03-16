import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { JournalContext } from "../../context/JournalContext";
import { MessageContext } from "../../context/MessageContext";
import { UserContext } from "../../context/UserContext";
import { Header, EmptyList } from "../_layout";
import { Journal, SnackBar } from "../../components";

export const JournalRead = () => {
    const { journals, setJournals, setJournalName } = useContext(JournalContext);
    const { messageSuccess, setMessageError } = useContext(MessageContext);
    const { userId } = useContext(UserContext);

    useEffect(() => {
        axios.get(`https://fuerza.test/journals/${ userId }`).then((response) => {
          setJournals(response.data.journals);
        });
    }, [setJournals, userId]);

    useEffect(() => {
        setMessageError("");
    }, [setMessageError]);

    return(
        <main>
            { journals.length > 0
            ? <>
                <Header size="--small" button={{ title:"+ Add journal", to:"journal/create" }} />
                <section className="journallist">
                    <div className="journallist__container">
                        { journals.map((journal) => (
                            <Link
                                to={ `journal/${journal.id}/posts` }
                                onClick={ () => setJournalName(journal.title) }
                                key={ journal.id }>
                                <Journal title={ journal.title } index={ journal.id } />
                            </Link>
                        )) }
                    </div>
                    { messageSuccess &&  <SnackBar type="success" messsage={ messageSuccess } /> }
                </section>
            </> 
            : <>
                <Header size="--small" />
                <section>
                    <EmptyList linkTitle="Create a journal" path="/journal/create" />
                </section>
            </> }
        </main>
    );
}
