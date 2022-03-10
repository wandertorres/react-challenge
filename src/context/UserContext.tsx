import React, { createContext, SetStateAction, useEffect, useState } from 'react';
import { User } from '../interfaces/user.interface';
  
interface UserContextInterface {
    user: User;
    userId: string | undefined;
    setUser: React.Dispatch<SetStateAction<User>>;
    setUserId: React.Dispatch<SetStateAction<string | undefined>>;
}

const defaultContext: UserContextInterface = {
    user: {username: "", password: "", journalIds:[], email:""},
    userId: "",
    setUser: () => {},
    setUserId: () => {},
}

export const UserContext = createContext<UserContextInterface>(defaultContext);

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(defaultContext.user);
    const [userId, setUserId] = useState(defaultContext.userId);

    useEffect(() => {
        
    }, []);

    return(
        <UserContext.Provider 
            value={{
                user,
                userId,
                setUser,
                setUserId,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
