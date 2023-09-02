import React, { ReactNode, useState } from 'react';
import AppContext from './AppContext';
import User from '../interfaces/User';

function AppProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading
    };

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
