import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CartItemsContext from "./utils/Cart_items_context/CartItemsContext";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";
import ProductFilterContext from "./utils/Product_filters_context/ProductFilterContext";

const Layout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [filters, setFilters] = useState({
        optionValues: {
            minPrice: [1000, 2000, 3000, 4000, 5000],
            maxPrice: [5000, 4000, 3000, 2000, 1000],
            minSelectedPrice: 1000,
            maxSelectedPrice: 5000,
        },
        selectedCheckBoxes: [],
    });

    return (
        <div className="font-Roboto font-normal flex flex-col space-y-4">
            <ProductFilterContext value={[filters, setFilters]}>
                <CartItemsContext value={[cartItems, setCartItems]}>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </CartItemsContext>
            </ProductFilterContext>
        </div>
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
    return (
        <RouterProvider router={router}>
            <Layout />
        </RouterProvider>
    );
};
export default App;
