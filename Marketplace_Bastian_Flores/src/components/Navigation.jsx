import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { CartContext } from '../assets/CartContext';
import { AuthContext } from '../assets/AuthContext';
import SearchForm from './SearchForm';


function Navigation() {

    const { cartQty } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        
        
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate("/");
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
                    <SearchForm />
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='d-flex align-items-center'>
                        <Button onClick={() => navigate("/")} className='d-flex align-items-center bg-dark border-0 m-1'>
                            <i className="fa-solid fa-house pe-1" style={{ color: "grey" }} />
                            <h5 className='text-white p-2'>Inicio</h5>
                        </Button>
                        {user?.token ? (
                            <>
                                <Button onClick={() => navigate("/perfil")} className='d-flex align-items-center bg-dark border-0 m-1'>
                                    <i className="fa-solid fa-right-to-bracket pe-2" style={{ color: "grey" }} />
                                    <h5 className='text-white p-2'>{user?.name}</h5>
                                </Button>
                            </>
                        ) : (
                            <Button onClick={() => navigate("/login")} className='d-flex align-items-center bg-dark border-0 m-1'>
                                <i className="fa-solid fa-right-to-bracket pe-2" style={{ color: "grey" }} />
                                <h5 className='text-white p-2'>Iniciar Sesión</h5>
                            </Button>
                        )}
                        {user?.token ? (null) : (
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
                        {user?.token ? (
                            <Button onClick={handleLogout} className='d-flex align-items-center bg-danger border-0 m-1'>
                                <p className='p-0 m-0'>Cerrar Sesión</p>
                            </Button>
                        ) : (null)}
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default Navigation;