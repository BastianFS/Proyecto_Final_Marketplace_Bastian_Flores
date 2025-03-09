import { useContext } from 'react';

import { CartContext } from '../assets/CartContext';

import Button from 'react-bootstrap/Button';
import { Stack, Container, Image } from 'react-bootstrap';

function CardPostCart({ post }) {

    if (!post) return null;
    const { addToCart, removeFromCart, cart } = useContext(CartContext);

    const post_cart = cart.find((item) => item.id === post.id);
    const post_qty = post_cart ? post_cart.quantity : 0;

    return (
        <>
            <Container className='d-flex flex-column align-items-end border p-0 m-0'>
                <div style={{ height: "18rem" }} className='m-2'>
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
                        <ul className='text-success fs-4 mt-4 me-5'>
                            ${post.price.toLocaleString("de-DE")}
                        </ul>
                    </div>
                <Stack direction='horizontal' className='m-2 ms-4 p-2'>
                    <Button className="m-2 ms-3" onClick={() => addToCart(post)}>+</Button>
                    <p className="m-2">{post_qty}</p>
                    <Button className="m-2" onClick={() => removeFromCart(post.id)}>-</Button>
                </Stack>
            </Container>
        </>
    );
};

export default CardPostCart;