import { useContext, useState } from "react";

import Image from "react-bootstrap/esm/Image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HelpPrivacy from "./HelpPrivacy";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../assets/AuthContext";
import axios from "axios";

function RegisterForm() {

    const {login} = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await axios.post(`${VITE_API_URL}/register`, { 
                name,
                password,
                email
            });

            if (response.ok) {
                login(email, password);
            } else {
                setError("Error al registrar usuario.");
            }
        } catch (err) {
            setError("No se pudo conectar al servidor.");
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
                            <Form className="p-5 flex-grow-1" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirmar Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Repite la contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Registrarse
                                </Button>
                            </Form>
                            {error && <Alert variant="danger">{error}</Alert>}
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
                </Col>
                <Col className="d-flex bg-dark align-items-center p-0 m-0">
                    <Image fluid src="Music2.webp" />
                </Col>
            </Row>

        </>
    );
}

export default RegisterForm;