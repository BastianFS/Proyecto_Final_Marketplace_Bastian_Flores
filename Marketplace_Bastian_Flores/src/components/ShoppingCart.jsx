import CardProduct from "./CardProduct";
import { Container } from "react-bootstrap";

function ShoppingCart({cart = [], addToCart, removeFromCart}) {

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <Container className= "p-0 m-0">
                <h1>{totalPrice}</h1>
                <CardProduct />
            </Container>
        </>
    );
};

export default ShoppingCart;
