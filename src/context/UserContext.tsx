import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { User } from '../interfaces/user.interface';
  
interface UserContextInterface {
    user: User;
    userId: string | undefined;
    isLogged: boolean;
    setUser: React.Dispatch<SetStateAction<User>>;
    setUserId: React.Dispatch<SetStateAction<string | undefined>>;
    setIsLogged: React.Dispatch<SetStateAction<boolean>>;
}

const defaultContext: UserContextInterface = {
    user: {username: "", password: "", journalIds:[], email:""},
    userId: "",
    isLogged: false,
    setUser: () => {},
    setUserId: () => {},
    setIsLogged: () => {},
}

export const UserContext = createContext<UserContextInterface>(defaultContext);

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(defaultContext.user);
    const [userId, setUserId] = useState(defaultContext.userId);
    const [isLogged, setIsLogged] = useState(defaultContext.isLogged);

    useEffect(() => {
        
    }, []);

    return(
        <UserContext.Provider 
            value={{
                user,
                userId,
                isLogged,
                setUser,
                setUserId,
                setIsLogged,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
