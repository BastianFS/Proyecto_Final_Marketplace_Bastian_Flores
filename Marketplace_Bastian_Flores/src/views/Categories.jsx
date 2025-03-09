import { Row, Col } from "react-bootstrap";

import BannerPromo from "../components/BannerPromo";
import DropDownMenu from "../components/DropDownMenu";
import SearchPostsRender from "../components/SearchPostsRender";
import SearchForm from "../components/SearchForm";
import PostsList from "../components/PostsList";

function Categories () {
    return(
        <>
            <DropDownMenu />
            <BannerPromo />
            <Row>
                <Col>
                    <SearchForm />
                </Col>
                <Col>
                    <SearchPostsRender />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PostsList />
                </Col>
            </Row>
        </>
    )
}

export default Categories;