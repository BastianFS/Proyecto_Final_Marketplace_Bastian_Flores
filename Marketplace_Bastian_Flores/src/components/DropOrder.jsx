import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { PostsContext } from '../assets/PostsContext';

function DropOrder() {
    const { setOrder, setFilter } = useContext(PostsContext);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Odenar resultados por...
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setOrder("ASC"); setFilter("price"); }}>Precio ASC</Dropdown.Item>
                <Dropdown.Item onClick={() => { setOrder("DESC"); setFilter("price"); }}>Precio DESC</Dropdown.Item>
                <Dropdown.Item onClick={() => { setOrder("ASC"); setFilter("date"); }}>Más nuevos</Dropdown.Item>
                <Dropdown.Item onClick={() => { setOrder("DESC"); setFilter("date"); }}>Más antiguos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropOrder;