import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProduct from './CardProduct';

function PostsApp() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error obteniendo los posts', error);
            });
    }, []);
    return (
        <>
        {products.length > 0 ? (
                products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))
            ) : (
                <p>Cargando productos...</p>
            )}
        </>
    )
}

export default PostsApp;