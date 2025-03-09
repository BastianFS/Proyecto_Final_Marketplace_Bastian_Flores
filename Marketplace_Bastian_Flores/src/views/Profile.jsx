import { useState, useContext } from "react";

import { Button, Col, Row, ListGroup, Spinner, Stack, Alert } from "react-bootstrap";

import DropDownMenu from "../components/DropDownMenu";
import BannerPromo from "../components/BannerPromo";
import CardPost from "../components/CardPost";

import { useNavigate } from "react-router-dom";

import { PostsContext } from "../assets/PostsContext";
import { FavoritesContext } from "../assets/FavoritesContext";
import { AuthContext } from "../assets/AuthContext";

function Profile() {

    const { userPosts, errorUserPosts, loadingUserPosts } = useContext(PostsContext);
    const { favoritesPosts, loadingFav, errorFav, toggleFavorite } = useContext(FavoritesContext);
    const { user , logout } = useContext(AuthContext)

    const [postToggle, setPostToggle] = useState(false);
    const [favToggle, setFavToggle] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
    const handleMyPosts = () => {
        if (!postToggle) {
            setPostToggle(true);
        } else {
            setPostToggle(false);
        }
        setFavToggle(false);
    };

    const handleMyFavorites = () => {
        if (!favToggle) {
            setFavToggle(true);
        } else {
            setFavToggle(false);
        }
        setPostToggle(false);
    };
    
    const handlePost = () => {
        navigate("/publicar");
    }


    return (
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col className="d-inline-flex flex-column text-center m-5">
                    <h1 className="p-2 pt-5">{user.name}</h1>
                    <ListGroup defaultActiveKey="#link1" className="ps-3 pe-3">
                        <ListGroup.Item action href="#link1" variant="primary">
                            <h4 className="p-2 pt-3">Acciones</h4>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleMyPosts}>
                            Mis publicaciones
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleMyFavorites}>
                            Mis favoritos
                        </ListGroup.Item>
                        <ListGroup.Item action variant ="success" onClick={handlePost}>
                            Sube tu publicación 
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger" onClick={handleLogout}>
                            Cerrar Sesion
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    {postToggle && (
                        <>
                            {userPosts.length === 0 && !errorUserPosts && !loadingUserPosts && <h5>No hay publicaciones para este usuario</h5>}
                            {errorUserPosts && <Alert variant="danger">{errorUserPosts}</Alert>}
                            {loadingUserPosts && (<Stack><p>Cargando publicaciones</p><Spinner animation="border" /></Stack>)}
                            {userPosts.length > 0 && !errorUserPosts && !loadingUserPosts && (
                                <Row className="g-4 mt-5 ms-5">
                                    {userPosts.map((userPost) => (
                                        <Col key={userPost.id} sm={6} md={6} lg={6} xl={6}>
                                            <CardPost post={userPost} />
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </>
                    )}
                     {favToggle && (
                        <>
                            {errorFav && <Alert variant="danger">{errorFav}</Alert>}
                            {loadingFav && (<Stack><p>Cargando favoritos</p><Spinner animation="border" /></Stack>)}
                            {favoritesPosts.length === 0 && !errorFav && !loadingFav && <h5>No hay favoritos para este usuario.</h5>}
                            {favoritesPosts.length > 0 && !errorFav && !loadingFav && (
                                <Row className="g-4 mt-5 ms-5">
                                    {favoritesPosts.map((favoritePost) => (
                                        <Col key={favoritePost.id} sm={6} md={6} lg={6} xl={6}>
                                            <CardPost post={favoritePost} />
                                            <Button onClick={() => toggleFavorite( favoritePost.id)}> 
                                                ❤️ Quitar de favoritos
                                            </Button>
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </>
                    )}
                    <h1>Opcion elegida</h1>
                    <p>Detalle</p>
                </Col>
            </Row >
        </>
    );
};

export default Profile;