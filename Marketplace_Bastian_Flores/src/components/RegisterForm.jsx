import Image from "react-bootstrap/esm/Image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HelpPrivacy from "./HelpPrivacy";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function RegisterForm() {
    return (
        <>
            <Row>
                <Col className="p-0 m-0">
                    <Image fluid src="Music.webp"/>
                </Col>
                <Col className="p-0 m-0">
                    <Row className="pe-3 me-3">
                        <Form className="p-5 flex-grow-1">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dirección de email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </Row>
                    <Row className="p-2 m-2 mt-5 pt-5">
                        <h1>
                            ¡Beneficios al crear tu cuenta!
                        </h1>
                        <ul>
                            <li>
                                Guardamos tu direccion de entrega.
                            </li>
                            <li>
                                Accede a beneficios como descuentos y promociones.
                            </li>
                            <li>
                                Crea avisos para vender tus productos.
                            </li>
                        </ul>
                    </Row>
                    <Row className="p-2 pt-5 mt-5">
                        <HelpPrivacy />
                    </Row>
                </Col>
                <Col className="d-flex bg-dark align-items-center p-0 m-0">
                    <Image fluid src="Music2.webp"/>
                </Col>
            </Row>

        </>
    );
}

export default RegisterForm;