import BannerPromo from "../components/BannerPromo";
import CardProductsReccomended from "../components/CardProductsRecommended";
import CardSectionProducts from "../components/CardSectionProducts";
import CategoryMenu from "../components/CategoryMenu";
import Contact from "../components/Contact";
import DropDownMenu from "../components/DropDownMenu";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";

function HomePage () {
    return (
        <>
           <DropDownMenu />
           <HeroPage />
           <CategoryMenu />
           <CardProductsReccomended />
           <BannerPromo />
           <CardSectionProducts />
           <Services />
           <Contact />
        </>
    );
  };
  
  export default HomePage;