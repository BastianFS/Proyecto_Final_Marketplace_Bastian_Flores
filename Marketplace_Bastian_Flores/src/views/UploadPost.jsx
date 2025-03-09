import { Container } from "react-bootstrap";
import PostForm from "../components/PostForm";

function UploadPost() {
    return (
        <>
            <Container className="mt-5 mb-5">
                <PostForm />
            </Container>
        </>
    )
}

export default UploadPost;