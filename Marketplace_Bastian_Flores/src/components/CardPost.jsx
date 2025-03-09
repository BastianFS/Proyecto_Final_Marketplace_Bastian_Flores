import { useContext } from 'react';

import { CartContext } from '../assets/CartContext';

import Button from 'react-bootstrap/Button';
import { Stack, Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../assets/FavoritesContext';
import { AuthContext } from '../assets/AuthContext';

function CardPost({ post }) {

    if (!post) return null;
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const { favoritesPosts , toggleFavorite } = useContext(FavoritesContext)

    return (
        <>
        <Row>
            <Col>
            <Container style={{ width: "18rem" }} className='d-flex flex-column align-items-end border p-0 m-0 mb-5'>
                <div style={{ height: "18rem" }} className='m-2 me-5'>
                    <Image fluid src={post.image_url} className='h-100' style={{ objectFit: "cover" }} />
                </div>
                <div style={{ height: "6rem" }} className='border-bottom'>
                    <h5 className="text-center mt-2">{post.name}</h5>
                </div>
                <div style={{ height: "9rem" }} className='m-3'>
                    <h5>{post.modelo}</h5>
                    <p>{post.description}</p>

                </div>
                <div style={{ height: "4rem" }}>
                    <ul className='text-success fs-4 mt-4 me-5' >
                        ${post.price.toLocaleString("de-DE")}
                    </ul>
                </div>
                <Stack>
                <Stack direction='horizontal' className='m-2 ms-4 p-2'>
                    <Link to="/Carrito">
                        <Button className='m-3 p-3' onClick={() => addToCart(post)}>Comprar</Button>
                    </Link>
                    <Button className="m-2 ms-3" onClick={() => addToCart(post)}>Añadir al Carro</Button>
                </Stack>
                </Stack>
                
                </Container>
            </Col>
        </Row>
                <Row>
                    <Col>
                        {user ? (
                            <Button className='ms-5 mb-3' onClick={() => toggleFavorite(post.id)}>
                                {favoritesPosts.some(fav => fav.id === post.id)
                                    ? ("🤍 Quitar de favoritos")
                                    : ("❤️ Agregar a favoritos")}
                            </Button>)
                            : (null)}
                    </Col>
                </Row>
        </>
    );
};

export default CardPost; 