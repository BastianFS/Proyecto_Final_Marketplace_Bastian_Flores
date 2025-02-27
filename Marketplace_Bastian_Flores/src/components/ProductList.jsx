import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CardProduct from './CardProduct';

import { PostsContext } from '../assets/PostsContext';

function ProductList() {

  const {products} = useContext(PostsContext); 

  return (
    <Container fluid className='p-0 m-0 g-4'>
      <Row className=' ms-5 ps-5 mt-5 pt-5'>
        {Array.isArray(products) ? (
          products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className='mb-4'>
              <CardProduct product={product} />
            </Col>
          ))) : (
          <p>Cargando productos...</p>
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
