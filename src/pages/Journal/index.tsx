import React, { useContext } from "react";
import { Header } from "../_layout/Header";
import { EmptyList } from "../_layout/EmptyList";
import { JournalContext } from "../../context/JournalContext";

export const Journal = () => {
    const {journals} = useContext(JournalContext);

    return(
        <main>
            <Header model="authenticated" />
            {
                journals.length > 0
                ? <span>Maior</span>
                : <section className="">
                    <EmptyList linkTitle="Create a journal" />
                </section>
            }
        </main>
    );
}
