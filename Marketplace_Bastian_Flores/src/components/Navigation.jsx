import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <Navbar expand="lg" className='bg-dark'>
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
                    <Nav className="me-auto align-items-center">
                        <Nav.Link className>
                            <Link className="text-reset text-decoration-none" to="/">
                                <Container className='d-flex align-items-center'>
                                    <span style={{color: "grey"}}>
                                        <i className="fa-solid fa-house fa-xl pe-1"></i>
                                    </span>
                                    <h2 className='text-white p-2'>Inicio</h2>
                                </Container>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-reset text-decoration-none d-flex" to="/Login">
                                <Container className='d-flex align-items-center'>
                                    <span style={{color: "grey"}}>
                                        <i className="fa-solid fa-right-to-bracket pe-2 fa-2xl"></i>
                                    </span>
                                    <h4 className='text-white p-2'>Iniciar Sesión</h4>
                                </Container>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-reset text-decoration-none" to="/Registrarse">
                            <Container className='d-flex align-items-center'>
                                    <span style={{color: "grey"}}>
                                        <i className="fa-solid fa-user pe-2 fa-2xl"></i>
                                    </span>
                                    <h4 className='text-white p-2'>Registrarse</h4>
                                </Container>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-reset text-decoration-none" to="/Carrito">
                            <Container className='d-flex align-items-center'>
                                    <span style={{color: "grey"}}>
                                        <i className="fa-solid fa-cart-shopping pe-2 fa-2xl"></i>
                                    </span>
                                    <h4 className='text-white p-2'>Carrito</h4>
                                </Container>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Navigation;