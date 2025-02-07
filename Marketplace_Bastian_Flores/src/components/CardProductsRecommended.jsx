import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/Row';
function CardProductsReccomended() {
    return (
        <>
            <Container className='p-5'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="GT_Arizona.jpg" />
                            <Card.Body>
                                <Card.Title>Arizona</Card.Title>
                                <Card.Text>
                                    Acoustics S-100
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$40.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center'>
                                <Card.Link href="#">Comprar</Card.Link>
                                <Card.Link href="#">Agregar al carrito</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '12rem' }}>
                            <Card.Img variant="top" src="Mixer_Macks.jpg" />
                            <Card.Body>
                                <Card.Title>Macks</Card.Title>
                                <Card.Text>
                                    MK-50E
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center text-success'>$220.000</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center'>
                                <Button>Comprar</Button>
                                <Button>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CardProductsReccomended;