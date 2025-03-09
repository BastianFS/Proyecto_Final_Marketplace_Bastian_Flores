import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

    const [favoritesPosts, setFavoritesPosts] = useState([]);
    const [loadingFav, setLoadingFav] = useState(false);
    const [errorFav, setErrorFav] = useState(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        
        if (user && user.id && user.token) {
            getUserFavorites(user);
        }
    }, [user, user?.id, user?.token]);

    const getUserFavorites = async (user) => {
        setLoadingFav(true);
        try {
            const response = await axios.get(`http://localhost:3000/favorites/${user.id}`, {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            setFavoritesPosts(response.data);
        } catch (err) {
            setErrorFav('Error obteniendo favoritos');
        } finally {
            setLoadingFav(false)
        }
    };

    const toggleFavorite = async ( post_id) => {
        if (!user || !user.token) {
            setErrorFav('Usuario no autenticado');
            return;
        }  

        setLoadingFav(true);
        try{
            const isFavorite = favoritesPosts.some(fav => fav.id === post_id);

            if (!isFavorite) {
                try{
                 await axios.post(`http://localhost:3000/favorites/${post_id}`, {},{
                    headers: {Authorization: `Bearer ${user?.token}` },
                });
                } catch (error) {
                    setErrorFav(`Error favoritos (POST): ${error}`)
                }
                const response = await axios.get(`http://localhost:3000/posts/${post_id}`)
                setFavoritesPosts([...favoritesPosts, response.data])
                console.log(favoritesPosts);
            } else {
                await axios.delete(`http://localhost:3000/favorites/${post_id}`, {
                    headers: {Authorization: `Bearer ${user?.token}` },
                });
                setFavoritesPosts(favoritesPosts.filter(fav => fav.id !== post_id))
                console.log(favoritesPosts);
            }
        
        } catch (error) {
            setErrorFav(`Error: ${error}`);
        }finally{
            getUserFavorites(user);
            setLoadingFav(false);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favoritesPosts, loadingFav, errorFav, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};