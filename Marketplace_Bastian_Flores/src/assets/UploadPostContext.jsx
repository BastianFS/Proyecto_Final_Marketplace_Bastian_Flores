import React, { createContext, useContext, useState } from 'react';

import axios from 'axios';

import { AuthContext } from './AuthContext';

export const UploadPostContext = createContext();

export const UploadPostProvider = ({ children }) => {

    const { user } = useContext(AuthContext);

    const imageUrl = "/sin_imagen.jpg";

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [especificaciones, setEspecificaciones] = useState("");
    const [modelo, setModelo] = useState("");
    const [description, setDescription] = useState("");

    async function UploadPost(date) {
      
        try {
            const userid = user.id;
            const int_price = parseInt(price);
            console.log(userid);
            await axios.post(`${import.meta.env.VITE_API_URL}/newpost`, { 
                name: name,
                description: description,
                price: int_price,
                image_url: imageUrl,
                especificaciones: especificaciones,
                modelo: modelo,
                userid: userid,
                date: date} ,{
                headers: { Authorization: `Bearer ${user.token}` }
            });
        } catch (error) {
            console.error("Error ingresando la publicación: ", error);
        }
    };

    return (
        <UploadPostContext.Provider value={{ setName, setPrice, setEspecificaciones, setModelo, setDescription, UploadPost }}>
            {children}
        </UploadPostContext.Provider>
    );
};