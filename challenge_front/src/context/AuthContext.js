import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('@token')) {
           return setToken(true)
        }

        return setToken(false)
    }, [token])

    return (
        <AuthContext.Provider value={[token, setToken]} >
            {children}
        </AuthContext.Provider>
    )
}