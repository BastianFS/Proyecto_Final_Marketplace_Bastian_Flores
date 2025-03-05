import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Image from "react-bootstrap/esm/Image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from 'react-bootstrap/Alert';

import HelpPrivacy from "./HelpPrivacy";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:3000/login", { email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("userId", response.data.id);
            navigate("/perfil");
        } catch (err) {
            setError("Email y/o contraseña incorrectos");
        }
    };


    return (
        <>
            <Row>
                <Col className="p-0 m-0">
                    <Image fluid src="Music.webp" />
                </Col>
                <Col className="p-0 m-0">
                    <Row className="pe-3 me-3">
                        <Col>
                            <Form className="p-5 flex-grow-1" onSubmit={handleSubmit} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Dirección de email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Iniciar Sesion
                                </Button>
                            </Form>
                            <div className="d-flex justify-content-center">
                                {error && <Alert key={'danger'} variant={'danger'} className="pe-5 ps-5">
                                    {error}
                                </Alert>}
                            </div>
                        </Col>
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
                </Col >
                <Col className="d-flex bg-dark align-items-center p-0 m-0">
                    <Image fluid src="Music2.webp" />
                </Col>
            </Row >

        </>
    );
}

export default LoginForm;