import Row from "react-bootstrap/esm/Row";
import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";
import Col from "react-bootstrap/esm/Col";
import CardProduct from "../components/CardProduct";
import { Button, Container } from "react-bootstrap";
import CardProductsReccomended from "../components/CardProductsRecommended";

function Product() {
    return (
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col>
                    <CardProduct />
                </Col>
                <Col>
                    <h3>Detalles del producto</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam temporibus at eius minus perspiciatis modi laboriosam sint ex, eveniet praesentium laborum dolorem facere in consectetur quos exercitationem, esse quas?</p>
                    <Container className="d-flex">
                        <Button className='m-2'>Comprar</Button>
                        <Button className='m-2'>Agregar al carrito</Button>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>
                        Especificaciones tecnicas
                    </h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, error laborum unde cumque officiis alias sint necessitatibus quo laudantium beatae corrupti nulla eveniet itaque. Placeat modi eos illo earum.</li>
                    </ul>
                </Col>
                <Col>
                    <h3>
                        Beneficios
                    </h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, error laborum unde cumque officiis alias sint necessitatibus quo laudantium beatae corrupti nulla eveniet itaque. Placeat modi eos illo earum.</li>
                    </ul>
                </Col>
                <Col>
                    <h3>
                        Reseñas
                    </h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis, error laborum unde cumque officiis alias sint necessitatibus quo laudantium beatae corrupti nulla eveniet itaque. Placeat modi eos illo earum.</li>
                    </ul>
                </Col>
            </Row>
            <CardProductsReccomended />
        </>
    );
};

export default Product;