import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropDownMenu() {
    return (
        <>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Categorias</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Instrumentos Musicales"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Guitarras Acusticas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Guitarras Electricas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Bajos
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Equipos de audio"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/4.1">
                                    Monitores
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.2">
                                    Interfaces
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.3">
                                    Microfonos
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default DropDownMenu;