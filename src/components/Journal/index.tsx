import React from "react";

type journalType = {
    title?: string;
    model?: string;
}

export const Journal = ({ ...props }: journalType) => {

    return (
        <div className={`journal journal${ props.model } flex flex--align--center`}>
            <div className="journal-spine" />
            <h2 className="journal-title">{ props.title }</h2>
        </div>
      );
}
