const CartItemCard = ({ cartItem, handleQuantity, removeCartItem }) => {
    return (
        <div className="flex border-2 w-[95%] border-slate-400 p-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-[1.01]">
            <div className="aspect-[473/593] max-w-[8em] ">
                <img
                    src={cartItem.image}
                    alt="cart item image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col flex-grow items-center justify-between">
                <span className="font-bold text-lg">{cartItem.title}</span>
                <span>{cartItem.size}</span>
                <div className="flex bg-rose-500 text-white">
                    <button
                        className="w-10"
                        onClick={() => handleQuantity("decrease", cartItem)}
                    >
                        -
                    </button>
                    <span className="w-12 text-center">
                        {cartItem.quantity}
                    </span>
                    <button
                        className="w-10"
                        onClick={() => handleQuantity("increase", cartItem)}
                    >
                        +
                    </button>
                </div>
                <span>&#x20B9; {cartItem.price}</span>
                <div className="w-1/2 flex space-x-2">
                    <button className="bg-rose-500 flex-grow text-white">
                        Buy Now
                    </button>
                    <button
                        className="bg-red-900 flex-grow text-white"
                        onClick={() => removeCartItem(cartItem.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CartItemCard;
