import React, { ReactNode, useState } from 'react';
import AppContext from './AppContext';
import User from '../interfaces/User';

function AppProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const value = {
        user,
        setUser
    };

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
