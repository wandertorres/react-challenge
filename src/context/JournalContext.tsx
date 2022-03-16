import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { Entry } from '../interfaces/entry.interface';
import { Journal } from '../interfaces/journal.interface';
  
interface JounalContextInterface {
    journals: Journal[];
    journalName: string;
    entries: Entry[];
    messageSuccess: string;
    setJournals: React.Dispatch<SetStateAction<Journal[]>>;
    setJournalName: React.Dispatch<SetStateAction<string>>;
    setEntries: React.Dispatch<SetStateAction<Entry[]>>;
    setMessageSuccess: React.Dispatch<SetStateAction<string>>;
}

const defaultContext: JounalContextInterface = {
    journals: [],
    journalName: "",
    entries: [],
    messageSuccess: "",
    setJournals: () => {},
    setJournalName: () => {},
    setEntries: () => {},
    setMessageSuccess: () => {},
}

export const JournalContext = createContext<JounalContextInterface>(defaultContext);

export const JournalProvider: React.FC = ({ children }) => {
    const [journals, setJournals] = useState(defaultContext.journals);
    const [journalName, setJournalName] = useState(defaultContext.journalName);
    const [entries, setEntries] = useState(defaultContext.entries);
    const [messageSuccess, setMessageSuccess] = useState(defaultContext.messageSuccess);

    useEffect(() => {
        
    }, []);

    return(
        <JournalContext.Provider 
            value={{
                journals,
                journalName,
                entries,
                messageSuccess,
                setJournals,
                setJournalName,
                setEntries,
                setMessageSuccess,
            }}
        >
            {children}
        </JournalContext.Provider>
    );
};
