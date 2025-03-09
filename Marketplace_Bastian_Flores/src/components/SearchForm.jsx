import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SearchContext } from "../assets/SearchContext";

function SearchForm() {

    const { searchTerm, setSearchTerm,handleSearch } = useContext(SearchContext)

    return (
        <>
            <Container>
                <Form className="p-2 m-2">
                    <Form.Group>
                        <Form.Label>¿Que buscas?</Form.Label>
                        <Form.Control type="search" value={searchTerm} onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Busca una publicación" />
                        <Button className="mt-3" variant="outline-primary" onClick={ handleSearch } >
                            Buscar
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default SearchForm;