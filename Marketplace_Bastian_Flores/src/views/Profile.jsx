import { Button, Col, Row } from "react-bootstrap";
import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";

function Profile() {
    return(
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col>
                    <h1>Nombre de usuario</h1>
                    <DropDownMenu>
                        Acciones
                    </DropDownMenu>
                    <Button>
                        Cerrar Sesion
                    </Button>
                </Col>
                <Col>
                    <h1>Opcion elegida</h1>
                    <p>Detalle</p>
                </Col>
            </Row>
        </>
    );
};

export default Profile;