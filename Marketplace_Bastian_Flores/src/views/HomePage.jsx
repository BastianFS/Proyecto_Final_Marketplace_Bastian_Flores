import CardProductsReccomended from "../components/CardProductsRecommended";
import CategoryMenu from "../components/CategoryMenu";
import DropDownMenu from "../components/DropDownMenu";
import HeroPage from "../components/HeroPage";

function HomePage () {
    return (
        <>
           <DropDownMenu />
           <HeroPage />
           <CategoryMenu />
           <CardProductsReccomended />
        </>
    );
  };
  
  export default HomePage;