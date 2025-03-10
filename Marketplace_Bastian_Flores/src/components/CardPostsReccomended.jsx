import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

import { useContext, useEffect, useState } from 'react';

import { PostsContext } from '../assets/PostsContext';

import CardPost from './CardPost';



function CardPostsReccomended() {

    const { posts } = useContext(PostsContext);
    const recPosts = Array.isArray(posts) && posts.length > 0
    ? posts.filter((p) => p.id === 1 || p.id === 2 || p.id === 3 || p.id === 4)
    : [];
  
    return (
        <>
            <h1 className='p-3 text-center text-center bg-light'>
                Publicaciones Recomendadas
            </h1>
            <Row className='m-5'>
                {recPosts.map((post) => (
                    <Col md={3}>
                                <CardPost
                                    post={post}
                                    key={post.id}
                                />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CardPostsReccomended;