import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand="lg">
            <Container className='container-fluid'>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <div className='flex-shrink-0 me-4' style={{ width: "5%" }}>
                        <img src="logo.svg" alt="Logo Solo Audio" className='img-fluid' />
                    </div>
                    <div>
                        <h1 className='fst-italic fs-4'>Solo Audio</h1>
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
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="text-reset text-decoration-none" to="/"><h2 className='text-secondary'>Inicio</h2></Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;