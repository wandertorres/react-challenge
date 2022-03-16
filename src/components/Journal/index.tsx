import React from "react";

type journalType = {
    title?: string;
    index?: string;
}

export const Journal = ({ ...props }: journalType) => {
    let model: string = "";

    if(props.index) {
        parseInt(props.index) % 2 === 0
            ? model = "--par"
            : model = "--impar"
    }

    return (
        <>
        <div className={`journal journal${ model } flex flex--align--center`}>
            <div className={`journal-spine journal-spine${ model }`} />
            <div className="journal-cover flex flex--justify--center">
                <h2 className={`journal-title${ model }`}>{ props.title }</h2>
            </div>
        </div>
        </>
      );
}
