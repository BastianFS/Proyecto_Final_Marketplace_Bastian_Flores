import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error obteniendo publicaciones');
                setLoading(false);
            });
    }, []);

    return (
        <PostsContext.Provider value={{ products, loading, error }}>
            {children}
        </PostsContext.Provider>
    );
};
