import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { useContext } from 'react';

import { PostsContext } from '../assets/PostsContext';
import { FavoritesContext } from '../assets/FavoritesContext';

import CardPost from './CardPost';
import { AuthContext } from '../assets/AuthContext';


function CardPostsReccomended() {

    const { posts } = useContext(PostsContext);
    const { favoritesPosts, toggleFavorite } = useContext(FavoritesContext);
    const { user } = useContext(AuthContext);
    const recommended_posts = posts.filter((p) => p.id === 1 || p.id === 2 || p.id === 3 || p.id === 4);


    return (
        <>
            <h1 className='p-3 text-center text-center bg-light'>
                Publicaciones Recomendadas
            </h1>
            <Row className='m-5'>
                {recommended_posts.map((post) => (
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