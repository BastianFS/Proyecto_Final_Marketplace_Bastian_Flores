import Row from "react-bootstrap/esm/Row";
import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Contact from "../components/Contact";

function Cart() {
    return (
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row className="pt-4">
                <Col>
                    <Row>
                        <Col>
                            <h1 className="text-center">
                                Carro de compras
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="p-2 ps-4">
                                Cantidad de articulos en el carro
                            </h3>
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="Headphones_Sutik.jpg" />
                            </Card>
                        </Col>
                        <Col className="pt-5">
                            <h3>
                                Adifonos Sutik
                            </h3>
                            <h5>
                                $80.000
                            </h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1 className="text-center">Total a pagar</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button className='p-3 mt-5'><h2>Pagar</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className="text-center mt-5">
                                Compra con hasta 3 cuotas sin intereses con MercadoApp.
                            </h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Contact />
        </>
    );
};

export default Cart;