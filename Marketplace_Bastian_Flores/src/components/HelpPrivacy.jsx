import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

function HelpPrivacy() {
    return (
        <>
            <Container className="d-flex justify-content-evenly">
                <Link to="/Ayuda" style={{ textDecoration: 'none'}}>
                    <h3 className=" p-3 " >
                        Ayuda
                    </h3>
                </Link>
                <Link to="/Privacidad" style={{ textDecoration: 'none'}}>
                    <h3 className=" p-3" >
                        Privacidad
                    </h3>
                </Link>
            </Container>
        </>
    );
};

export default HelpPrivacy;