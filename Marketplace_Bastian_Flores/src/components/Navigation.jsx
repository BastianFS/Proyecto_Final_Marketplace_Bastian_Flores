import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

import { CartContext } from '../assets/CartContext';


function Navigation() {

    const { cartQty } = useContext(CartContext)

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("name") || "Usuario";

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };


    return (
        <Navbar expand="lg" className='bg-dark' sticky="top">
            <Container className='container-fluid'>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <div className='pb-2 me-4' style={{ width: "15%" }}>
                        <img src="logo.svg" alt="Logo Solo Audio" className='img-fluid' />
                    </div>
                    <div>
                        <h1 className='fst-italic fs-4 text-white'>Solo Audio</h1>
                    </div>
                </Navbar.Brand>
                <Container className='container-fluid'>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Buscar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='d-flex align-items-center'>
                        <Button onClick={() => navigate("/")} className='d-flex align-items-center bg-dark border-0 m-1'>
                            <i className="fa-solid fa-house pe-1" style={{ color: "grey" }} />
                            <h5 className='text-white p-2'>Inicio</h5>
                        </Button>
                        {token ? (
                            <>
                                <Button onClick={() => navigate("/perfil")} className='d-flex align-items-center bg-dark border-0 m-1'>
                                    <i className="fa-solid fa-right-to-bracket pe-2" style={{ color: "grey" }} />
                                    <h5 className='text-white p-2'>{userName}</h5>
                                </Button>
                            </>
                        ) : (
                            <Button onClick={() => navigate("/login")} className='d-flex align-items-center bg-dark border-0 m-1'>
                                <i className="fa-solid fa-right-to-bracket pe-2" style={{ color: "grey" }} />
                                <h5 className='text-white p-2'>Iniciar Sesión</h5>
                            </Button>
                        )}
                        {token ? ( null ) : (
                        <Button onClick={() => navigate("/registro")} className='d-flex align-items-center bg-dark border-0 m-1'>
                            <i className="fa-solid fa-user pe-2" style={{ color: "grey" }} />
                            <h5 className='text-white p-2'>Registrarse</h5>
                        </Button>
                        )}
                        <Button onClick={() => navigate("/carrito")} className='d-flex align-items-center bg-dark border-0 m-1'>
                            <i className="fa-solid fa-cart-shopping pe-2" style={{ color: "grey" }} />
                            <div className='d-flex flex-cloumn align-items-center'>
                                <h5 className='text-white p-2'>Carrito</h5>
                                <Badge bg="secondary">{cartQty}</Badge>

                            </div>
                        </Button>
                        {token ? (
                        <Button onClick={handleLogout} className='d-flex align-items-center bg-danger border-0 m-1'>
                                    <p className='p-0 m-0'>Cerrar Sesión</p>
                                </Button>
                        ) : ( null )}
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default Navigation;