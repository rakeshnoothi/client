import { createContext } from "react";

export const Context = createContext();

const CartItemsContext = ({ value, children }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CartItemsContext;
