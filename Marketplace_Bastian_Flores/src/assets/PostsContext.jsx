import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [errorPosts, setErrorPosts] = useState(null);
    const [errorUserPosts, setErrorUserPosts] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [loadingUserPosts, setLoadingUserPosts] = useState(false);
    const { user } = useContext(AuthContext)
    const [postHandle, setPostHandle] = useState("");

    const [order, setOrder] = useState("ASC");
    const [filter, setFilter] = useState("price");

    useEffect(() => {
        getPosts(filter, order)
    }, [filter, order]);

    useEffect(() => {
        if (user && user?.id) {
            setLoadingUserPosts(true)
            try {
                setUserPosts(posts.filter((post) => post.userid === user.id));
            } catch (err) {
                setErrorUserPosts(`Error obteniendo publicaciones del usuario ${user.name}: ${err.message}`)
            } finally {
                setLoadingUserPosts(false)

            }
        } else {
            setUserPosts([])
        }
    }, [user, posts]);

    function getPosts(filter, order) {
        setLoadingPosts(true);
        axios
            .get(`${import.meta.env.VITE_API_URL}/posts?filter=${filter}&order=${order}`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((err) => {
                setErrorPosts(err.response?.data?.message || 'Error obteniendo publicaciones');
            })
            .finally(() => {
                setLoadingPosts(false);
            });
    }

    return (
        <PostsContext.Provider value={{ posts, loadingPosts, errorPosts, errorUserPosts, userPosts, loadingUserPosts, setOrder, setFilter, postHandle, setPostHandle }}>
            {children}
        </PostsContext.Provider>
    );
};
