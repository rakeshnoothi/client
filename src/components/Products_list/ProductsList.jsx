import Card from "../Card/Card";
import {
    categoryProductsListAccessories,
    categoryProductsListKids,
    categoryProductsListMen,
    categoryProductsListWomen,
} from "../../utils/products_page_productsDetails/categoryProductsList";
import { useParams } from "react-router-dom";

const ProductsList = () => {
    const { productCategory } = useParams();
    const returnProduct = () => {
        if (productCategory === "men") {
            return categoryProductsListMen;
        }
        if (productCategory === "women") {
            return categoryProductsListWomen;
        }
        if (productCategory === "kids") {
            return categoryProductsListKids;
        }
        if (productCategory === "accessories") {
            return categoryProductsListAccessories;
        }
    };
    return (
        <div className="flex-grow flex flex-wrap">
            <div className="">
                <img
                    src={categoryProductsListMen[1].bannerImage}
                    alt=""
                    className="w-full h-full"
                />
            </div>
            {returnProduct().map((categoryProduct) => {
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
