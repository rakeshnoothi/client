import products from "../../../utils/products_page_productsDetails/products";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../../utils/Product_filters_context/ProductFilterContext";

const CheckBox = ({ productType, filterState }) => {
    const [filters, setFilters] = filterState;
    const setSelectedCheckBoxes = (e, productType) => {
        if (
            e.target.checked === true &&
            filters.selectedCheckBoxes.includes(productType)
        ) {
            setFilters({
                ...filters,
                selectedCheckBoxes: filters.selectedCheckBoxes.filter(
                    (item) => {
                        return item === productType;
                    }
                ),
            });
        }
        if (
            !filters.selectedCheckBoxes.includes(productType) &&
            e.target.checked === true
        ) {
            setFilters({
                ...filters,
                selectedCheckBoxes: [
                    ...filters.selectedCheckBoxes,
                    productType,
                ],
            });
        }
        if (
            e.target.checked === false &&
            filters.selectedCheckBoxes.includes(productType)
        ) {
            setFilters({
                ...filters,
                selectedCheckBoxes: filters.selectedCheckBoxes.filter(
                    (item) => item !== productType
                ),
            });
        }
    };

    return (
        <div className="space-x-2 flex  hover:text-rose-500">
            <input
                type="checkbox"
                id={productType}
                value={productType}
                onClick={(e) => setSelectedCheckBoxes(e, productType)}
            />
            <label htmlFor={productType} className=" grow hover:cursor-pointer">
                {productType}
            </label>
        </div>
    );
};

const TypeFilter = () => {
    const { productCategory } = useParams();
    const [filters, setFilters] = useContext(FilterContext);

    const returnProductByCategory = () => {
        return products.filter(
            (categoryProduct) => categoryProduct.category === productCategory
        );
    };

    const removedDuplicateProductsByType = returnProductByCategory().reduce(
        (accumulator, current) => {
            if (
                !accumulator.find(
                    (item) => item.productType === current.productType
                )
            ) {
                accumulator.push(current);
            }
            return accumulator;
        },
        []
    );

    useEffect(() => {
        if (filters.selectedCheckBoxes.length === 0) {
            setFilters({
                ...filters,
                selectedCheckBoxes: removedDuplicateProductsByType.map(
                    (item) => item.productType
                ),
            });
        }
    });

    useEffect(() => {
        setFilters({
            ...filters,
            selectedCheckBoxes: [],
        });
    }, [productCategory]);

    return (
        <div className="space-y-2 ">
            <div className="font-bold">Type</div>
            <div>
                {removedDuplicateProductsByType.map((product) => (
                    <CheckBox
                        productType={product.productType}
                        key={product.productType}
                        filterState={[filters, setFilters]}
                        removedDuplicateProductsByType={
                            removedDuplicateProductsByType
                        }
                    />
                ))}
            </div>
        </div>
    );
};
export default TypeFilter;
