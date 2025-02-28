import { useContext } from "react"
import { CartContext } from "../assets/CartContext";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/esm/Row";
import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";

import { Link } from "react-router-dom";

import Contact from "../components/Contact";

import ShoppingCartApp from "../components/ShoppingCartApp";


function Cart() {

    const { totalPrice, cartQty, clearCart } = useContext(CartContext);

    return (
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col>
                    <Container fluid className="d-flex flex-column text-center p-5">
                        <h1>Carrito de compras</h1>
                        <h3 className="pt-4">Cantidad de articulos:
                            <span className="text-primary ps-2">
                                {cartQty}
                            </span>
                        </h3>
                    </Container>
                </Col>

            </Row>
            <Row>
                <Col>
                    <ShoppingCartApp />
                </Col>
                <Col>
                    <Row>
                        <Col md={{ offset: 2 }}>
                            <Stack className="d-inline-flex flex-column">
                                <h3 className="pt-5 mt-4">Total a pagar:
                                    <span className="text-success ps-2">
                                        ${totalPrice.toLocaleString("de-DE")}
                                    </span>
                                </h3>
                                <Button className="mt-3" onClick={clearCart}>Pagar</Button>
                                <Button className="mt-3" onClick={clearCart}>Vaciar el carro</Button>
                                <Button className="mt-3">
                                    <Link className="p-0 m-0" to="/" style={{textDecoration: "none",color: "white"}}>
                                        Volver
                                    </Link>
                                </Button>
                            </Stack>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <ul className="mt-5 text-start">
                                <li className="mb-3 fs-4">Accede a 3 coutas precio contado con MercadoApp.</li>
                                <li className="mb-3 fs-4">Puedes pagar hasta en 12 coutas con Bancho de Chile.</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Contact />
        </>
    );
};

export default Cart;