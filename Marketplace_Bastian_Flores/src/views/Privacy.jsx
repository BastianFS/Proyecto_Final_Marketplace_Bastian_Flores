import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import HelpPrivacy from "../components/HelpPrivacy";
import Accordion from 'react-bootstrap/Accordion';

function Privacy() {
    return (
        <>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Acuerdo de Privacidad</Accordion.Header>
                            <Accordion.Body>
                                <h6>
                                    I. Declaración Institucional
                                </h6>
                                <p>
                                    La Seguridad de la Información del Ministerio de Desarrollo Social y Familia, en adelante MDSF, es el conjunto de definiciones y acciones destinadas a proteger la confidencialidad, integridad y disponibilidad de los activos de información, a fin de garantizar la continuidad de los procesos de la Institución y eliminar o minimizar el daño que se les pudiera producir a estos activos.

                                    La normativa actualmente vigente exige en los organismos públicos que estos garanticen la privacidad y la protección de la información personal identificable que la institución esté autorizada para utilizar, procesar o almacenar. En este marco, el Ministerio establece las siguientes directrices para proteger la información de carácter personal.
                                </p>
                                <h6>
                                    II. Objetivo
                                </h6>
                                <p>
                                    Esta Política establece los lineamientos seguidos por el Ministerio, para asegurar la protección y privacidad de los datos personales, de conformidad a la legislación y normativa vigentes, para garantizar la confidencialidad de la información de las personas y el pleno ejercicio de sus derechos en materia de privacidad.
                                </p>
                                <h6>
                                    III. Alcance y Campo de Aplicación
                                </h6>
                                <p>
                                    La presente política aplica a todos los procesos de provisión de productos y servicios institucionales, así como a los procesos de tratamientos de datos, en los cuales se manipule y procese información de carácter personal e identificable de usuarios/as y beneficiarios/as, así como del personal del Ministerio.

                                    Esta política deberá ser conocida y cumplida por todos los/as funcionarios/as de planta y contrata, personal a honorarios y todas aquellas personas naturales o jurídicas que presten servicios y que, a raíz de ello, accedan o manejen datos personales de los/as usuarios/as, beneficiarios/as o de los/as funcionarios/as y servidores/as públicos/as del MDSF.

                                    Esta política aplica a todos los equipos, medios o dispositivos tecnológicos, así como a repositorios digitales en los cuales se almacenen datos de carácter personal o datos personales, así como datos sensibles.

                                    La implementación de esta política garantiza un marco regulatorio institucional para el tratamiento de los datos personales de cara a la ciudadanía, para todos nuestros sitios y sistemas institucionales.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Acuerdo de Confidencialidad</Accordion.Header>
                            <Accordion.Body>
                                <h6>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet accusantium autem, obcaecati quod quia nemo, quisquam exercitationem at vel debitis! Animi quasi tenetur odit obcaecati id officia. Iure, dignissimos!
                                </h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <HelpPrivacy />
                </Col>
                <Col>
                    <Image fluid src="Music3.jpg" />
                </Col>
            </Row>
        </>
    );
};

export default Privacy;