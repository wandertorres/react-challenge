import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { Journal } from '../interfaces/journal.interface';
  
interface JounalContextInterface {
    journals: Journal[];
    journalName: string;
    setJournals: React.Dispatch<SetStateAction<Journal[]>>
    setJournalName: React.Dispatch<SetStateAction<string>>
}

const defaultContext: JounalContextInterface = {
    journals: [],
    journalName: "",
    setJournals: () => {},
    setJournalName: () => {}
}

export const JournalContext = createContext<JounalContextInterface>(defaultContext);

export const JournalProvider: React.FC = ({ children }) => {
    const [journals, setJournals] = useState(defaultContext.journals);
    const [journalName, setJournalName] = useState(defaultContext.journalName);

    useEffect(() => {
        
    }, []);

    return(
        <JournalContext.Provider 
            value={{
                journals,
                journalName,
                setJournals,
                setJournalName
            }}
        >
            {children}
        </JournalContext.Provider>
    );
};
