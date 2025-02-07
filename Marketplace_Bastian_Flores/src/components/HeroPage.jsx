import Carousel from 'react-bootstrap/Carousel';
import ManGuitar from './ManGuitar';
import WomanEarphones from './WomanEarphones';
import ManUkelele from './ManUkele';
import WomanMicrophone from './WomanMicrophone';
import Slogan from './Slogan';

function HeroPage() {
    return (
        <>
            <Slogan />
            <Carousel className='text-center bg-secondary bg-gradient'>
                <Carousel.Item>
                    <ManGuitar />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold' >
                            Facilidades de pago
                        </h3>
                        <p className='fs-3'>
                            Hasta 3 cuotas precio contado con mercado pago.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <WomanEarphones />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold'>
                            Compra y Vende
                        </h3>
                        <p className='fs-3'>
                            Un marketplace en el que puedes confiar.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ManUkelele />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold'>
                            Explota tu creatividad
                        </h3>
                        <p className='fs-3'>
                            Miles de productos y oportunidades.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <WomanMicrophone />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold'>
                            Envio Gratis
                        </h3>
                        <p className='fs-3'>
                            Por compras sobre 100.000 clp. Valido solo en RM.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HeroPage;