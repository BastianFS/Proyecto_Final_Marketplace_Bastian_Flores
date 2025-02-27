import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';

function CardProduct({ product, addToCart, removeFromCart }) {

    if (!product) return null;

    return (
        <>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={product.image_url} />
                <Card.Title className="text-center p-2 pb-3">{product.name}</Card.Title>
                <Card.Subtitle className='ps-3'>
                    {product.modelo}
                </Card.Subtitle>
                <Card.Body>
                    {product.description}
                    <ul className='text-center text-success fs-4 mt-4'>
                        ${product.price.toLocaleString("de-DE")}
                    </ul>
                    <Stack direction="horizontal" className='d-flex justify-content-center' >
                        <Button className='m-3 p-3'>Comprar</Button>
                        <Button className='m-3 p-3' onClick={() => addToCart(product)}>Agregar al carrito</Button>
                        <Button className='m-3 p-3' onClick={() => removeFromCart(product)}>Quitar del carrito</Button>
                    </Stack>
                </Card.Body>
            </Card >
        </>
    );
};

export default CardProduct;