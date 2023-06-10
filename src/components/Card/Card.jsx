import { useContext } from "react";
import { Context } from "../../utils/Cart_items_context/CartItemsContext";

const Card = ({ productDetails }) => {
    const [cartItems, setCartItems] = useContext(Context);
    const addToCart = (product) => {
        const arr = [...cartItems, { ...product, quantity: 1 }];
        //filtering the duplicates and adding them to quantity.
        const uniqueProducts = arr.reduce((accumulator, current) => {
            if (!accumulator.find((item) => item.id === current.id)) {
                accumulator.push(current);
            } else {
                accumulator.map((item) => {
                    if (item.id === current.id) {
                        item.quantity = item.quantity + 1;
                    }
                });
            }
            return accumulator;
        }, []);
        setCartItems(uniqueProducts);
    };

    return (
        <div className=" aspect-[473/593] min-w-[232px] max-w-[271px] max-h-[456px] flex flex-col justify-center items-center space-y-2 p-4  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-[1.01] group">
            <img
                src={productDetails.image}
                alt="product image"
                className=" w-full h-full"
            />
            <span className="font-medium text-lg">{productDetails.title}</span>
            <span className="font-bold">&#x20B9; {productDetails.price}</span>
            <button
                className="bg-rose-500 w-full h-8 text-white"
                onClick={() => addToCart(productDetails)}
            >
                Add To Cart
            </button>
        </div>
    );
};
export default Card;
