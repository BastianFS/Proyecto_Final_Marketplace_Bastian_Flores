import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';

function BannerPromo() {
    return (
        <>
            <Carousel className='text-center bg-dark bg-gradient'>
                <Carousel.Item>
                    <Image src="Blue_Gradient.svg" style={{ width: "1345px", height: "500px", objectFit: "cover" }} fluid />;
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold' >
                            Paga con tu app SoloAudioApp
                        </h3>
                        <p className='fs-3'>
                            Descubre ofertas exclusivas.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="Dark_Gradient.jpg" style={{ width: "1345px", height: "500px", objectFit: "cover" }} fluid />;
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <h3 className='fs-1 fw-bold' >
                            Hasta 3 coutas precio contando
                        </h3>
                        <p className='fs-3'>
                            Usa tu MercadoApp para aprovechar todos los beneficios.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default BannerPromo;