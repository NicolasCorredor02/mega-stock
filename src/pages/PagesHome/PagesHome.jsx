import { Button } from "@/components/ui/button";
import imageBanner from "@/assets/banner-home.webp";
import { Link } from "react-router";
import ItemCategoryContainer from '@/pages/PagesHome/components/ItemCategoryContainer';
import ItemFeaturedContainer from '@/pages/PagesHome/components/ItemFeaturedContainer';

function PagesHome() {
  return (
    <>
      <section className="relative h-[800px] bg-black">
        <img
          src={imageBanner}
          alt="banner home image"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-secondary">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Amazing Deals
            </h1>
            <p className="text-xl mb-8">
              Shop the latest trends at unbeatable prices
            </p>
            <Link to="/shop">
              <Button className="text-xl">Shop Now</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="main-section-layout">
        <div className="main-section-container">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
            Shop by category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ItemCategoryContainer />
          </div>
        </div>
      </section>
      <section className="main-section-layout">
        <div className="main-section-container">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
            Featured Products
          </h2>
          <div className="grid grid-cols-auto-fit-products gap-8">
            <ItemFeaturedContainer />
          </div>
        </div>
      </section>
    </>
  );
}

export default PagesHome;
