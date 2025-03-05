import { useState } from "react";

import { Button, Col, Row } from "react-bootstrap";

import DropDownMenu from "../components/DropDownMenu";
import BannerPromo from "../components/BannerPromo";

import { useNavigate } from "react-router-dom";

function Profile() {

        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);



    async function fetchPosts(userId) {
        try {
            const response = await fetch(`http://localhost:3000/posts?userId=${userId}`);
            if (!response.ok) {
                throw new Error("Error al cargar los posts");
            }   
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const navigate = useNavigate();

    const name = localStorage.getItem("name");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    const handleMyPosts = () => {
        setLoading(true);
        localStorage.getItem(userId);
        fetchPosts(userId);
    }
    return (
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col className="d-flex flex-column text-center">
                    <h1 className="p-2 pt-5">{name}</h1>
                    <h4 className="p-2 pt-3 bg-primary text-white">Acciones</h4>
                    <DropDownMenu>
                        <p onClick={handleMyPosts}>Mis publicaciones</p>
                    </DropDownMenu>
                    <Button onClick={handleLogout}>
                        Cerrar Sesion
                    </Button>
                </Col>
                <Col>
                    {loading ? (<p>Cargando posts...</p>) : (null)}
                    {error ? (<p>Error: {error}</p>) : (null)}
                    {posts.length === 0 ? (<p>No hay posts para este usuario.</p>) : ( null)}
                    {posts.length > 0 ? (<ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>)
                        )}
                            </ul>) : (null ) }
                    <h1>Opcion elegida</h1>
                    <p>Detalle</p>
                </Col>
            </Row>
        </>
    );
};

export default Profile;