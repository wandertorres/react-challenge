import React from "react";

type journalType = {
    title: string | undefined;
    model: 'big' | 'small';
}

export const Journal = ({ ...props }: journalType) => {

    return (
        <div className="journal flex flex--align--center">
            <div className="journal-spine" />
            <h2 className="journal-title">{ props.title }</h2>
        </div>
      );
}
