import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

import { useContext } from 'react';

import { PostsContext } from '../assets/PostsContext';

import CardProduct from './CardProduct';

function CardProductsReccomended() {

    const { products } = useContext(PostsContext);

    const recommendedProducts = products.filter((p) => p.id === 1 || p.id === 2 || p.id === 3 || p.id === 4);


    return (
        <>
            <h1 className= 'p-3 text-center text-center bg-light'>
                Productos Recomendados
            </h1>
            <Row className='m-5'>
                {recommendedProducts.map((product) => (
                    <Col md={3}>
                        <CardProduct
                            product={product}
                            key={product.id}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CardProductsReccomended;