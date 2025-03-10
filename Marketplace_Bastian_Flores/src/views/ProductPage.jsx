import BannerPromo from "../components/BannerPromo";
import CardPostsReccomended from "../components/CardPostsReccomended";
import DropDownMenu from "../components/DropDownMenu";

function ProductPage() {
    return(
        <>
            <DropDownMenu />
            <BannerPromo />
            
            <CardPostsReccomended />
        </>
    )
}

export default ProductPage;