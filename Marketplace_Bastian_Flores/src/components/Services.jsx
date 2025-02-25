import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';

function Services() {
    return (
        <>
            <Carousel className='text-center bg-dark bg-gradient'>
                <Carousel.Item>
                    <Image src="background_music1.jpeg" style={{ width: "1345px", height: "500px", objectFit: "cover" }} fluid />;
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold' >
                            Despacho y retiro de productos
                        </h3>
                        <p className='fs-3'>
                            Avisanos cuando estaras en casa y nosotros coordinaremos todo lo demas.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="background_music2.jpg" style={{ width: "1345px", height: "500px", objectFit: "cover" }} fluid />;
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold' >
                            Calibracion de instrumentos
                        </h3>
                        <p className='fs-3'>
                            Te entregaremos tus instrumentos listos para tocar.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Services;