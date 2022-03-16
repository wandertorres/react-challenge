import React, { createContext, SetStateAction, useEffect, useState } from 'react';
  
interface MessageContextInterface {
    messageSuccess: string;
    messageError: string;
    loading: boolean;
    setMessageSuccess: React.Dispatch<SetStateAction<string>>;
    setMessageError: React.Dispatch<SetStateAction<string>>;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const defaultContext: MessageContextInterface = {
    messageSuccess: "",
    messageError: "",
    loading: false,
    setMessageSuccess: () => {},
    setMessageError: () => {},
    setLoading: () => {},
}

export const MessageContext = createContext<MessageContextInterface>(defaultContext);

export const MessageProvider: React.FC = ({ children }) => {
    const [messageSuccess, setMessageSuccess] = useState(defaultContext.messageSuccess);
    const [messageError, setMessageError] = useState(defaultContext.messageError);
    const [loading, setLoading] = useState(defaultContext.loading);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessageSuccess("");
            setMessageError("");
        }, 2900);

        return () => clearTimeout(timer);
    }, [messageSuccess, messageError, setMessageSuccess, setMessageError]);

    return(
        <MessageContext.Provider 
            value={{
                messageSuccess,
                messageError,
                loading,
                setMessageSuccess,
                setMessageError,
                setLoading
            }}
        >
            {children}
        </MessageContext.Provider>
    );
};
