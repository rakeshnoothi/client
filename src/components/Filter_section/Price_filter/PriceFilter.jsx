import { useContext } from "react";
import { FilterContext } from "../../../utils/Product_filters_context/ProductFilterContext";

const PriceFilter = () => {
    const [filters, setFilters] = useContext(FilterContext);
    const optionValues = {
        minPrice: [1000, 2000, 3000, 4000, 5000],
        maxPrice: [5000, 4000, 3000, 2000, 1000],
    };

    const handlePriceRange = (e, priceCategory) => {
        e.preventDefault();

        const value = parseInt(e.target.value);
        if (priceCategory === "max-price") {
            const filteredPrices = optionValues.minPrice.filter(
                (optionValue) => value > optionValue
            );
            setFilters({
                ...filters,
                optionValues: {
                    ...filters.optionValues,
                    minPrice: filteredPrices,
                    maxSelectedPrice: value,
                },
            });
        }
        if (priceCategory === "min-price") {
            const filteredPrices = optionValues.maxPrice.filter(
                (optionValue) => value < optionValue
            );
            setFilters({
                ...filters,
                optionValues: {
                    ...filters.optionValues,
                    maxPrice: filteredPrices,
                    minSelectedPrice: value,
                },
            });
        }
    };

    return (
        <div>
            <div className="font-medium">Price</div>
            <div className="flex flex-col">
                <label htmlFor="min-price">Minimum Price</label>
                <select
                    name="min-price"
                    id="min-price"
                    onChange={(e) => handlePriceRange(e, "min-price")}
                    value={filters.optionValues.minSelectedPrice}
                >
                    {filters.optionValues.minPrice.map((optionValue) => (
                        <option value={optionValue} key={optionValue}>
                            {optionValue}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="max-price">Maximum Price</label>
                <select
                    name="max-price"
                    id="max-price"
                    onChange={(e) => handlePriceRange(e, "max-price")}
                    value={filters.optionValues.maxSelectedPrice}
                >
                    {filters.optionValues.maxPrice.map((optionValue) => (
                        <option value={optionValue} key={optionValue}>
                            {optionValue}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
export default PriceFilter;
