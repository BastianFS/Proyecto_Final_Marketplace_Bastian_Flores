import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function Filter() {
    return (
        <>
            <Form>
                <Form.Group className="m-3" controlId="formSearch">
                    <Form.Label>Categorias</Form.Label>
                    <Form.Control type="search" placeholder="Busca tu categoria" />
                </Form.Group>
                <Button className="m-3" variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
            <Dropdown className='m-2'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Instrumentos Musicales
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Guitarras Clasicas</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Guitarras Electricas</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Bajos</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='m-2'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Equipos de Audio
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mixers</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Audifonos</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Microfonos</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">DJ Mixers</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='m-2'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Accesorios Musicales
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cuerdas Guitarra Clasica</Dropdown.Item>
              
                </Dropdown.Menu>
            </Dropdown>


        </>
    );
};

export default Filter