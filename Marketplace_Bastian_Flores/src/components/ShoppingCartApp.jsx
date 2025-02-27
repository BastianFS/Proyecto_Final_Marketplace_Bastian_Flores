import { useContext } from "react";
import CardProduct from "./CardProduct";
import { CartContext } from "../assets/CartContext";
import { PostsContext } from "../assets/PostsContext";

function ShoppingCartApp() {


    const { cart, cartQty, totalPrice, addToCart, removeFromCart } = useContext(CartContext);
    const { products } = useContext(PostsContext);

    return (
        <>
            <h1>${totalPrice.toLocaleString("de-DE")}</h1>
            <h1>{cartQty}</h1>
            {cart.length > 0 ? (
                cart.map((cartItem) => {
                    const product = products.find((p) => p.id === cartItem.id);
                    return product ? (
                        <CardProduct
                            key={cartItem.id}
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ) : null;
                })
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </>
    );
};

export default ShoppingCartApp;