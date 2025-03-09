import { useContext, useEffect } from "react";
import { Container, Row, Col, Spinner, Stack, Alert } from "react-bootstrap";

import { SearchContext } from "../assets/SearchContext";

import CardPost from "./CardPost";

function SearchPostsRender() {

    const { searchTerm, searchPosts, failSearch, loadingSearch, setFailSearch, setLoadingSearch } = useContext(SearchContext);

    useEffect(() => {

        if (searchPosts.length === 0 && searchTerm) {
            setFailSearch(true);
        }
        setLoadingSearch(false);
    }, [searchPosts]);

        return (
            <>
                <Container>
                    {searchPosts.length > 0 && !failSearch &&
                        <Row className="g-4 mt-5 ms-5">
                            {searchPosts.map((searchPost) => (
                                <Col key={searchPost.id} sm={6} md={6} lg={6} xl={6}>
                                    <CardPost post={searchPost} />
                                </Col>
                            ))}
                        </Row>
                    }
                    {failSearch && <Alert variant="danger">No se encontro ningún resultado</Alert>}
                    {loadingSearch && (<Stack><p>Cargando publicaciones</p><Spinner animation="border" /></Stack>)}
                </Container>
            </>
        )
    }

export default SearchPostsRender;