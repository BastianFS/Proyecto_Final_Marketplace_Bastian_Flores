import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CardProduct from './CardProduct';

import { PostsContext } from '../assets/PostsContext';

function ProductList() {

  const {products} = useContext(PostsContext); 

  return (
    <>
    <Container className='d-flex justify-content-center flex-column'>
    <h1 className='text-center mt-5'>Publicaciones</h1>
    <Row className='g-4 mt-5'>
        {Array.isArray(products) ? (
          products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <CardProduct product={product} />
            </Col>
          ))) : (
          <p>Cargando productos...</p>
        )}
      </Row>
    </Container>
      
    </>
  );
};

export default ProductList;
