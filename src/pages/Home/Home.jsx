import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BannerSec from "../../components/AllSections/Home/BannerSec";
import ServiceTypeSec from "../../components/AllSections/Home/ServiceTypeSec";
import CategoriesSec from "../../components/AllSections/Home/CategoriesSec";
import FeaturedSec from "../../components/AllSections/Home/FeaturedSec";
import ShowcaseSec from "../../components/AllSections/Home/ShowcaseSec";
import SpecialProductsSec from "../../components/AllSections/Home/SpecialProductsSec";
import PopularProductsSec from "../../components/AllSections/Home/PopularProductsSec";
import BrandsSec from "../../components/AllSections/Home/BrandsSec";
import BlogsSec from "../../components/AllSections/Home/BlogsSec";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>ECOMSHOP - The Best eCommerce Website</title>
        {/* meta infos */}
        <meta
          name="description"
          content="ECOMSHOP - The Best eCommerce Website"
        />
      </Helmet>

      <div>
        <div className="ns_container py-8 sm:py-12">
          <BannerSec />
        </div>
        <div className="ns_container py-3 sm:py-5 bg-gray-special">
          <ServiceTypeSec />
          <CategoriesSec />
          <FeaturedSec />
          <ShowcaseSec />
          <SpecialProductsSec />
          <PopularProductsSec />
          <BrandsSec />
          <BlogsSec />
        </div>
      </div>
    </>
  );
};

export default Home;
