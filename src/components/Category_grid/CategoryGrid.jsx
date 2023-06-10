import "./gridStyles.css";
import { Link } from "react-router-dom";
import { gridCategoriesDetails } from "../../utils/grid_categories_details/gridCategoriesDetails";

const GridCard = ({ gridCategoryImage }) => {
    return (
        <div
            className={` ${gridCategoryImage.categoryName} hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-[1.01] relative bg-black group`}
        >
            <Link
                to={`/products/${gridCategoryImage.categoryName}`}
                className="w-3/5 h-16 bg-white z-10 absolute inset-0 m-auto peer hover:bg-rose-500 hover:text-white  flex justify-center items-center"
            >
                <button className="uppercase">
                    {gridCategoryImage.categoryName}
                </button>
            </Link>

            <img
                src={gridCategoryImage.image}
                alt=""
                className="w-full h-full object-cover absolute peer-hover:opacity-80 group-hover:opacity-80"
            />
        </div>
    );
};

const CategoryGrid = () => {
    return (
        <div className="flex justify-center p-6 ">
            <div className="container w-4/5 aspect-[1/1]">
                {gridCategoriesDetails.map((gridCategoryDetails) => {
                    return (
                        <GridCard
                            key={gridCategoryDetails.id}
                            gridCategoryImage={gridCategoryDetails}
                        />
                    );
                })}
                <div className="empty5"></div>
                <div className="empty4"></div>
                <div className="empty1"></div>
                <div className="empty3"></div>
                <div className="empty2"></div>
            </div>
        </div>
    );
};
export default CategoryGrid;

{
    /* <button className="w-3/5 h-16 bg-white z-30 absolute inset-0 m-auto peer hover:bg-rose-500 hover:text-white uppercase">
<Link to={`/products/${gridCategoryImage.categoryName}`}>
    {gridCategoryImage.categoryName}
</Link>
</button> */
}
