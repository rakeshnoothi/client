import Card from "../Card/Card";

const ProductSection = ({ type, productsDetails }) => {
    return (
        <div className="flex flex-col justify-center p-4 space-x-6 space-y-2 overflow-x-auto">
            <h2 className="text-xl uppercase font-bold">{type}</h2>
            <div className="flex justify-center items-center">
                {productsDetails.map((productDetails) => {
                    return (
                        <Card
                            key={productDetails.id}
                            productDetails={productDetails}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default ProductSection;
