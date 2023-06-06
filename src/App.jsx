import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
    return (
        <div className="font-Roboto font-normal">
            <NavBar />
            <Outlet />
            <Footer />
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
                path: "/products",
                element: <Products />,
            },
            {
                path: "/product",
                element: <Product />,
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
