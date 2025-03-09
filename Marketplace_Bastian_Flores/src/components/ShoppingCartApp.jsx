import { useContext } from "react";
import { CartContext } from "../assets/CartContext";
import { PostsContext } from "../assets/PostsContext";
import { Col, Row } from "react-bootstrap";
import CardPostCart from "./CardPostCart";

function ShoppingCartApp() {


    const { cart } = useContext(CartContext);
    const { posts } = useContext(PostsContext);

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <Row md={2} className="m-3">
                        {cart.map((cart_item) => {
                            const post = posts.find((p) => p.id === cart_item.id);
                            return post ? (
                                <Col md={3} className="mt-2 mb-2">
                                    <CardPostCart
                                        key={cart_item.id}
                                        post={post}
                                    />
                                </Col>
                            ) : null;
                        })};
                    </Row>
                </>

            ) : (
                <p>No hay publicaciones en el carrito</p>
            )
            };
        </>
    );
}

export default ShoppingCartApp;