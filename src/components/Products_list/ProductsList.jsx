import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import filterProduct from "../../utils/product_filter_functions/filterProduct";
import { useContext } from "react";
import { FilterContext } from "../../utils/Product_filters_context/ProductFilterContext";
import products from "../../utils/products_page_productsDetails/products";

const ProductsList = () => {
    const [filters] = useContext(FilterContext);

    const { productCategory } = useParams();
    const returnProductByCategory = () => {
        return products.filter(
            (categoryProduct) => categoryProduct.category === productCategory
        );
    };

    const priceFilteredProducts = filterProduct.priceFilter(
        returnProductByCategory(),
        filters.optionValues.minSelectedPrice,
        filters.optionValues.maxSelectedPrice
    );

    const checkBoxFilteredProducts = priceFilteredProducts.filter((item) => {
        return filters.selectedCheckBoxes.includes(item.productType);
    });

    return (
        <div className="flex-grow flex flex-wrap">
            {checkBoxFilteredProducts.map((categoryProduct) => {
                return (
                    <Card
                        key={categoryProduct.id}
                        productDetails={categoryProduct}
                    />
                );
            })}
        </div>
    );
};
export default ProductsList;
