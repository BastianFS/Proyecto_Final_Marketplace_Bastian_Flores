import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Filter from "../components/Filter";
import CardSectionProducts from "../components/CardSectionProducts";

function ProductsCategory() {
    return(
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col lg={2}>
                    <Filter />
                </Col>
                <Col>
                    <CardSectionProducts />
                </Col>
            </Row>
        </>
    );
};

export default ProductsCategory;