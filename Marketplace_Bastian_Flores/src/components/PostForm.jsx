import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { UploadPostContext } from "../assets/UploadPostContext";

function PostForm() {

    const { description, setDescription, name, setName, price, setPrice, especificaciones, setEspecificaciones, modelo, setModelo, UploadPost } = useContext(UploadPostContext)

    const handdleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString();
        UploadPost(currentDate);
    };

return (
    <>
        <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Nombre del articulo</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <Form.Label>Especificaciones</Form.Label>
                <Form.Control type="text" value={especificaciones} onChange={(e) => setEspecificaciones(e.target.value)} />
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handdleSubmit}>
                Publicar!
            </Button>
        </Form>
    </>
)
}

export default PostForm;