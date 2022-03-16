import React, { createContext, SetStateAction, useEffect, useState } from 'react';
  
interface MessageContextInterface {
    messageSuccess: string;
    messageError: string;
    setMessageSuccess: React.Dispatch<SetStateAction<string>>;
    setMessageError: React.Dispatch<SetStateAction<string>>;
}

const defaultContext: MessageContextInterface = {
    messageSuccess: "",
    messageError: "",
    setMessageSuccess: () => {},
    setMessageError: () => {},
}

export const MessageContext = createContext<MessageContextInterface>(defaultContext);

export const MessageProvider: React.FC = ({ children }) => {
    const [messageSuccess, setMessageSuccess] = useState(defaultContext.messageSuccess);
    const [messageError, setMessageError] = useState(defaultContext.messageError);

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
                setMessageSuccess,
                setMessageError
            }}
        >
            {children}
        </MessageContext.Provider>
    );
};
