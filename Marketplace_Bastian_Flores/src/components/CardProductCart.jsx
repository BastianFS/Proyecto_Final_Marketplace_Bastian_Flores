import { useContext } from 'react';

import { CartContext } from '../assets/CartContext';

import Button from 'react-bootstrap/Button';
import { Stack, Container, Image } from 'react-bootstrap';

function CardProductCart({ product }) {

    if (!product) return null;
    const { addToCart, removeFromCart, cart } = useContext(CartContext);

    const productInCart = cart.find((item) => item.id === product.id);
    const productQty = productInCart ? productInCart.quantity : 0;

    return (
        <>
            <Container className='d-flex flex-column align-items-end border p-0 m-0'>
                <div style={{ height: "18rem" }} className='m-2'>
                    <Image fluid src={product.image_url} className='h-100' style={{ objectFit: "cover" }} />
                </div>
                <div style={{ height: "6rem" }} className='border-bottom'>
                    <h5 className="text-center mt-2">{product.name}</h5>
                </div>
                <div style={{ height: "9rem" }} className='m-3'>
                    <h5>{product.modelo}</h5>
                    <p>{product.description}</p>
                    
                </div>
                <div style={{ height: "4rem" }}>
                        <ul className='text-success fs-4 mt-4 me-5'>
                            ${product.price.toLocaleString("de-DE")}
                        </ul>
                    </div>
                <Stack direction='horizontal' className='m-2 ms-4 p-2'>
                    <Button className="m-2 ms-3" onClick={() => addToCart(product)}>+</Button>
                    <p className="m-2">{productQty}</p>
                    <Button className="m-2" onClick={() => removeFromCart(product.id)}>-</Button>
                </Stack>
            </Container>

        </>
    );
};

export default CardProductCart;