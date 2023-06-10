import CategoryGrid from "../../components/Category_grid/CategoryGrid";
import ProductSection from "../../components/Product_section/ProductSection";
import Slider from "../../components/Slider/Slider";
import {
    featuredProductsDetails,
    TrendingProductDetails,
} from "../../utils/product/productsDetails";

const Homepage = () => {
    return (
        <main className="flex flex-col space-y-6">
            <Slider />
            <ProductSection
                type="featured"
                productsDetails={featuredProductsDetails}
            />

            <ProductSection
                type="Trending"
                productsDetails={TrendingProductDetails}
            />
            <CategoryGrid />
        </main>
    );
};
export default Homepage;
