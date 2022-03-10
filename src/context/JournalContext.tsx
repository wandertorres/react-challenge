import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { Journal } from '../interfaces/journal.interface';
  
interface JounalContextInterface {
    journals: Journal[];
    setJournals: React.Dispatch<SetStateAction<Journal[]>>
}

const defaultContext: JounalContextInterface = {
    journals: [],
    setJournals: () => {},
}

export const JournalContext = createContext<JounalContextInterface>(defaultContext);

export const JournalProvider: React.FC = ({ children }) => {
    const [journals, setJournals] = useState(defaultContext.journals);

    useEffect(() => {
        
    }, []);

    return(
        <JournalContext.Provider 
            value={{
                journals,
                setJournals
            }}
        >
            {children}
        </JournalContext.Provider>
    );
};
