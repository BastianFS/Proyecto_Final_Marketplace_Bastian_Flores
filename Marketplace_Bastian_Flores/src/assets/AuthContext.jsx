import React, { createContext, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);
    const [authError, setAuthError] = useState(null);

    const navigate = useNavigate();

    const login = async ({ email, password }) => {

        setAuthLoading(true);
        setAuthError(null);
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            setUser(response.data);
            navigate("/perfil")
            if (error.response) {
                console.error('Backend error:', error.response.data);
                throw error.response.data.message;
            } else if (error.request) {
                console.error('Network error:', error.request);
                throw 'Network error. Please check your connection.';
            } else {
                console.error('Error:', error.message);
                throw 'An unexpected error occurred.';
            }
        }
        finally {
            setAuthError(error)
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, authLoading, authError, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};