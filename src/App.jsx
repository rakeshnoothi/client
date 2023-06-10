import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CartItemsContext from "./utils/Cart_items_context/CartItemsContext";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";

const Layout = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartItemsContext value={[cartItems, setCartItems]}>
            <div className="font-Roboto font-normal flex flex-col space-y-4">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </CartItemsContext>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/products/:productCategory",
                element: <Products />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const App = () => {
    console.log("app rendered");
    return (
        <RouterProvider router={router}>
            <Layout />
        </RouterProvider>
    );
};
export default App;
