import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import HelpPrivacy from "../components/HelpPrivacy";

function Help() {
    return (
        <>
            <Row>
                <Col>
                    <Image fluid src="Music3.jpg" />
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h1 className="p-5">
                        Preguntas Frecuentes
                    </h1>
                    <h3>
                        ¿Como puedo vender mis productos?
                    </h3>
                    <p>
                        Solo necesitas crear una cuenta y completar un formulario para ingresar tu producto.
                    </p>
                    <h3>
                        ¿Como puedo ver mis productos?
                    </h3>
                    <p>
                        Accede a tu perfil y podras ver toda la informacion sobre tus productos.
                    </p>
                    <HelpPrivacy/>
                </Col>
            </Row>
        </>
    );
};

export default Help;