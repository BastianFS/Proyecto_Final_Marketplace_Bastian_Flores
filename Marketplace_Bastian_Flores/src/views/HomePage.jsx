import BannerPromo from "../components/BannerPromo";
import CardPostsReccomended from "../components/CardPostsReccomended";
import CategoryMenu from "../components/CategoryMenu";
import DropDownMenu from "../components/DropDownMenu";
import HeroPage from "../components/HeroPage";
import PostsList from "../components/PostsList";
import Services from "../components/Services";

function HomePage () {
    return (
        <>
           <DropDownMenu />
           <HeroPage />
           <CategoryMenu />
           <CardPostsReccomended />
           <BannerPromo />
           <PostsList />
           <Services />
        </>
    );
  };
  
  export default HomePage;