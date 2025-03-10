import BannerPromo from "../components/BannerPromo";
import CardPostsReccomended from "../components/CardPostsReccomended";
import DropDownMenu from "../components/DropDownMenu";
import Product from "../components/Product";

function ProductPage() {
    return(
        <>
            <DropDownMenu />
            <BannerPromo />
            <Product />
            <CardPostsReccomended />
        </>
    )
}

export default ProductPage;