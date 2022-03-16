import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { Entry } from '../interfaces/entry.interface';
import { Journal } from '../interfaces/journal.interface';
  
interface JounalContextInterface {
    journals: Journal[];
    journalName: string;
    entries: Entry[];
    setJournals: React.Dispatch<SetStateAction<Journal[]>>;
    setJournalName: React.Dispatch<SetStateAction<string>>;
    setEntries: React.Dispatch<SetStateAction<Entry[]>>;
}

const defaultContext: JounalContextInterface = {
    journals: [],
    journalName: "",
    entries: [],
    setJournals: () => {},
    setJournalName: () => {},
    setEntries: () => {},
}

export const JournalContext = createContext<JounalContextInterface>(defaultContext);

export const JournalProvider: React.FC = ({ children }) => {
    const [journals, setJournals] = useState(defaultContext.journals);
    const [journalName, setJournalName] = useState(defaultContext.journalName);
    const [entries, setEntries] = useState(defaultContext.entries);

    useEffect(() => {
        
    }, []);

    return(
        <JournalContext.Provider 
            value={{
                journals,
                journalName,
                entries,
                setJournals,
                setJournalName,
                setEntries,
            }}
        >
            {children}
        </JournalContext.Provider>
    );
};
