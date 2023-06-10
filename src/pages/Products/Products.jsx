import FilterSection from "../../components/Filter_section/FilterSection";
import ProductsList from "../../components/Products_list/ProductsList";

const Products = () => {
    return (
        <div className="flex">
            <FilterSection />
            <ProductsList />
        </div>
    );
};
export default Products;
