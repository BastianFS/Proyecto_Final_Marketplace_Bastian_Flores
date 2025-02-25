import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/Row';
function CardProductsReccomended() {
    return (
        <>
            <Container className='p-5 d-flex justify-content-center'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="GT_Arizona.jpg" />
                            <Card.Body>
                                <Card.Title>Guitarra Clasica Arizona</Card.Title>
                                <Card.Text>
                                    Acoustics S-100
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$40.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Mixer_Macks.jpg" />
                            <Card.Body>
                                <Card.Title>Mixer Macks</Card.Title>
                                <Card.Text>
                                    MK-50E
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$220.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Headphones_Sutik.jpg" />
                            <Card.Body>
                                <Card.Title>Adifonos Sutik</Card.Title>
                                <Card.Text>
                                    S-80
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$80.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Keyboard_piano.jpg" />
                            <Card.Body>
                                <Card.Title>Teclado Rudes</Card.Title>
                                <Card.Text>
                                    Rudes Armonik
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$1.200.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CardProductsReccomended;