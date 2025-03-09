import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CardPost from './CardPost';

import { PostsContext } from '../assets/PostsContext';
import DropOrder from './DropOrder';

function PostsList() {

  const { posts } = useContext(PostsContext);

  return (
    <>
      <Container>
        <Row>
          <Col>
          <h1 className='text-center mt-5'>Publicaciones</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{offset:9}} >
          <DropOrder />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='g-4 mt-5'>
          {Array.isArray(posts) ? (
            posts.map(post => (
              <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
                <CardPost post={post} />
              </Col>
            ))) : (
            <p>Cargando publicaciones...</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PostsList;
