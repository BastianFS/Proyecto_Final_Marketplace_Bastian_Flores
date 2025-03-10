import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../assets/PostsContext";

import { Container, Image, Row, Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../assets/CartContext";

function Product() {

    const { postHandle, getUserNameById } = useContext(PostsContext);
    const { addToCart } = useContext(CartContext)

    const [userName, setUserName] = useState("");

    if (!postHandle) {
        return <div>Cargando publicación...</div>;
    }

    useEffect(() => {
        async function getUserNameById(userid) {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/userpost/${userid}`);
                setUserName(response.data);
            } catch (error) {
                console.error("Error obteniendo el nombre de usuario:", error);
                setUserName("Usuario desconocido");
            }
        }
        getUserNameById(postHandle.userid);
    }, [postHandle.userid]);


    return (
        <>
            <Row>
                <Col>
                    <Container className='p-4 m-4'>

                        <Image

                            src={postHandle.image_url}
                            style={{ objectFit: "cover", height: "28rem", width: "22rem" }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "placeholder-image.jpg";
                            }}
                            alt={postHandle.name}
                            className="m-4 ms-5"
                        />

                    </Container>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Container
                                className="m-2 p-2"
                            >
                                <h1 className="mt-5 mb-4">{postHandle.name}</h1>
                                <h3 className="mb-4 text-muted">{postHandle.modelo}</h3>
                                <p className="fs-4">{postHandle.description}</p>
                                <p className="text-center mt-5 me-5 fs-3 text-success">${postHandle.price.toLocaleString("de-DE")}</p>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <Container>
                                <Stack className='m-2 ms-4 p-2'>
                                    <Link to="/Carrito" className='btn btn-primary m-3 p-3 fs-4' onClick={() => addToCart(postHandle)}>
                                        Comprar
                                    </Link>
                                    <Button className='m-3 p-3 fs-4' variant="primary">
                                        Dejar Reseña
                                    </Button>
                                    <Button className='m-3 p-3 fs-4' variant="success">
                                        Enviar mensaje a {userName.name}
                                    </Button>
                                </Stack>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row >
            <Row className="text-center m-5 p-5">
                <Col className="p-2 m-2">
                    <h1>Especificaciones</h1>
                    <p className="p-2 m-2 fs-5">{postHandle.especificaciones}</p>
                </Col>
                <Col className="p-2 m-2">
                    <h1>Reseñas</h1>
                    <p className="p-2 m-2 fs-5">{postHandle.resenas}</p>
                </Col>
            </Row>
        </>
    )
}
export default Product;