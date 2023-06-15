import PriceFilter from "./Price_filter/PriceFilter";
import TypeFilter from "./Type_filter/TypeFilter";

const FilterSection = () => {
    return (
        <div className="w-1/3 p-4">
            <div className="flex flex-col space-y-4">
                <div className="font-bold text-lg">Filters</div>
                <PriceFilter />
                <TypeFilter />
            </div>
        </div>
    );
};
export default FilterSection;
