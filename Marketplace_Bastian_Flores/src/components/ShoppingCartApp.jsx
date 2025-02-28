import { useContext } from "react";
import { CartContext } from "../assets/CartContext";
import { PostsContext } from "../assets/PostsContext";
import { Col, Row } from "react-bootstrap";
import CardProductCart from "./CardProductCart";

function ShoppingCartApp() {


    const { cart } = useContext(CartContext);
    const { products } = useContext(PostsContext);

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <Row md={2} className="m-3">
                        {cart.map((cartItem) => {
                            const product = products.find((p) => p.id === cartItem.id);
                            return product ? (
                                <Col md={3} className="mt-2 mb-2">
                                    <CardProductCart
                                        key={cartItem.id}
                                        product={product}
                                    />
                                </Col>
                            ) : null;
                        })};
                    </Row>
                </>

            ) : (
                <p>No hay productos en el carrito</p>
            )
            };
        </>
    );
}

export default ShoppingCartApp;