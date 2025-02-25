import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/Row';
function CardSectionProducts() {
    return (
        <>
            <Container>
                <Row className='p-1 m-1 mt-5'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="piano.webp" />
                            <Card.Body>
                                <Card.Title>Grand Piano Kawasaki</Card.Title>
                                <Card.Text>
                                    Acoustic GP-100
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$4.000.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Microphone_Elvis.jpg" />
                            <Card.Body>
                                <Card.Title>Microfono Elvis</Card.Title>
                                <Card.Text>
                                    Good Vibes
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$120.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Cable.jpg" />
                            <Card.Body>
                                <Card.Title>Cable de Instrumento Krillin</Card.Title>
                                <Card.Text>
                                    6 Metros
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$15.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Inear.webp"/>
                            <Card.Body>
                                <Card.Title>Audifonos Inear KZeta</Card.Title>
                                <Card.Text>
                                    Super Bass Precision Pro
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$35.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='p-1 m-1 mt-2'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="GT_Electrica.jpeg" />
                            <Card.Body>
                                <Card.Title>Guitarra Clasica Don Pols</Card.Title>
                                <Card.Text>
                                    Epic LP
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$550.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="DJ_Mixer.jpg" />
                            <Card.Body>
                                <Card.Title>DJ Mixer Neultra</Card.Title>
                                <Card.Text>
                                    AWS0
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$420.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Bass.jpeg" />
                            <Card.Body>
                                <Card.Title>Bajo PP</Card.Title>
                                <Card.Text>
                                    AWS0
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$310.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center d-flex justify-content-center'>
                                <Button className='m-2'>Comprar</Button>
                                <Button className='m-2'>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Gauchita.jpeg" />
                            <Card.Body>
                                <Card.Title>Cuerdas de Guitarra Clasica Gauchita</Card.Title>
                                <Card.Text>
                                    0.9-0.42
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$7.500</ListGroup.Item>
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

export default CardSectionProducts;