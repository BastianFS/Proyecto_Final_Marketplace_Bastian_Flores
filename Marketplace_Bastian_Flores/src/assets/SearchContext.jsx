import React, { createContext , useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchPosts, setSearchPosts] = useState([]);
    const [failSearch, setFailSearch] = useState(false)
    const [loadingSearch, setLoadingSearch] = useState(false)

    const navigate = useNavigate();

    const handleSearch = async () => {

        setFailSearch(false);
        setLoadingSearch(true);
        try {
            const response = await axios.get(`http://localhost:3000/search/posts?term=${searchTerm}`);
            setSearchPosts(response.data);
            navigate("/categorias")
        } catch (error) {
            console.error('Error al buscar publicaciones: ', error);
        }
    };

    return (
        <SearchContext.Provider value={{ handleSearch, searchPosts, searchTerm, setSearchTerm, failSearch, loadingSearch,setFailSearch, setLoadingSearch }}>
            {children}
        </SearchContext.Provider>
    );
};