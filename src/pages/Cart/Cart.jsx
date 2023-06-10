import { useContext } from "react";
import { Context } from "../../utils/Cart_items_context/CartItemsContext";
import CartItemCard from "../../components/Card_item_card/CartItemCard";

const getTotalPrice = (arr) => {
    const totalPrice = arr.reduce((accumulator, current) => {
        const carttItemPrice = current.price * current.quantity;
        return carttItemPrice + accumulator;
    }, 0);
    return totalPrice;
};

const Cart = () => {
    const [cartItems, setCartItems] = useContext(Context);

    const removeCartItem = (cartItemId) => {
        const removedCartItemArr = cartItems.filter(
            (cartItem) => cartItem.id !== cartItemId
        );
        setCartItems(removedCartItemArr);
    };

    const handleQuantity = (action, cartItem) => {
        if (action === "increase" && cartItem.quantity < 5) {
            const increased = cartItems.map((item) => {
                if (item.id === cartItem.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(increased);
        }
        if (action === "decrease" && cartItem.quantity > 1) {
            const decreased = cartItems.map((item) => {
                if (item.id === cartItem.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setCartItems(decreased);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="h-[50vh] grid place-items-center text-2xl font-bold">
                <span className="uppercase">Yout cart is empty &#128531;</span>
            </div>
        );
    } else {
        return (
            <div className="h-[85vh] flex p-4">
                <div className="flex-1 h-full overflow-auto flex flex-col items-center w-full">
                    {cartItems.map((cartItem) => {
                        return (
                            <CartItemCard
                                key={cartItem.id}
                                cartItem={cartItem}
                                handleQuantity={handleQuantity}
                                removeCartItem={removeCartItem}
                            />
                        );
                    })}
                </div>
                <div className="flex-1 p-4 h-full ">
                    <div className="w-2/3 space-y-4">
                        <div className="text-xl uppercase">Price Details</div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Items</span>
                                <span>{cartItems.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Amount</span>
                                <span className="font-bold">
                                    &#x20B9;
                                    {getTotalPrice(cartItems)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Cart;
