import { useContext } from "react";
import { PostsContext } from "../assets/PostsContext";

function Product() {

    const { postHandle } = useContext(PostsContext);

    return (
        <>
            <Container className='d-flex flex-column align-items-end border p-0 m-0'>
                <div style={{ height: "18rem" }} className='m-2'>
                    <Image fluid src={postHandle.image_url} className='h-100' style={{ objectFit: "cover" }} />
                </div>
                <div style={{ height: "6rem" }} className='border-bottom'>
                    <h5 className="text-center mt-2">{postHandle.name}</h5>
                </div>
                <div style={{ height: "9rem" }} className='m-3'>
                    <h5>{postHandle.modelo}</h5>
                    <p>{postHandle.description}</p>

                </div>
                <div style={{ height: "4rem" }}>
                    <ul className='text-success fs-4 mt-4 me-5'>
                        ${postHandle.price.toLocaleString("de-DE")}
                    </ul>
                </div>
            </Container>
        </>
    )
}
export default Product;