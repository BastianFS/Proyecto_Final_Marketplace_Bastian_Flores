import { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/esm/Image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import HelpPrivacy from "./HelpPrivacy";

import { AuthContext } from "../assets/AuthContext";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { user, authError, authLoading, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user != null) {
            navigate("perfil");
            console.log(user);
        }
    }, [user, navigate]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        
        if (!email || !password) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        else if (!validateEmail(email)) {
            setError("Por favor, ingrese un email válido.");
            return;
        }
        else if (!validatePassword(password)) {
            setError("La contraseña debe contener al menos 8 caracteres, una letra y un numero.");
            return;
        }
        else {
            try {
                await login({email, password});
            } catch (err) {
                setError(authError || "Error al iniciar sesión")
            }
        }
        setLoading(false);
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
                            <Form className="p-5 flex-grow-1" onSubmit={handleSubmit} controlId="formBasicPassword">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Dirección de email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña (minimo 8 caracteres)</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={password.length > 0 && !validatePassword(password)} />
                                    <Form.Control.Feedback type="invalid">
                                        La contraseña debe contener al menos 8 caracteres, letras y numeros.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Iniciar Sesion
                                </Button>
                            </Form>
                            {loading || authLoading && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Cargando...</span>
                                </Spinner>
                            )}
                            <div className="d-flex justify-content-center">
                                {error && (
                                    <Alert key={'danger'} variant={'danger'} className="pe-5 ps-5">
                                        {error}
                                    </Alert>
                                )}
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-2 m-2 mt-5 pt-5">
                        <h1>¡Beneficios al crear tu cuenta!</h1>
                        <ul>
                            <li>Guardamos tu direccion de entrega.</li>
                            <li>Accede a beneficios como descuentos y promociones.</li>
                            <li>Crea avisos para vender tus productos.</li>
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

export default LoginForm;