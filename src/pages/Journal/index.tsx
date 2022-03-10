import React from "react";
import { Header } from "../_layout/Header";
import { EmptyList } from "../_layout/EmptyList";

export const Journal = () => {

    return(
        <main>
            <Header model="authenticated" />
            <section className="">
                <EmptyList linkTitle="Create a journal" />
            </section>
        </main>
    );
}
