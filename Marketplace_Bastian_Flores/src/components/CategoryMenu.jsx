import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


function CategoryMenu() {
    return (
        <>
            <Container className='p-5 bg-dark d-flex justify-content-center' style={{ maxWidth: "100%" }}>
                <Row>
                    <Col>
                        <Button className='p-5'>
                            <h1>
                                Instrumentos
                            </h1>
                        </Button>
                    </Col>
                    <Col>
                        <Button className='p-4'>
                            <h1>
                                Home Studio
                            </h1>
                        </Button>
                    </Col>
                    <Col>
                        <Button className='p-5'>
                            <h1>
                                Amplificación
                            </h1>
                        </Button>
                    </Col>
                    <Col>
                        <Button className='p-5'>
                            <h1>
                                Audio Pro
                            </h1>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CategoryMenu;