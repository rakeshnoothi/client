import {
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { useContext, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../utils/Cart_items_context/CartItemsContext";
const NavBar = () => {
    const [cartItems] = useContext(Context);
    return useMemo(() => {
        return (
            <nav className="flex justify-between p-4 sticky top-0 shadow-[0px_-24px_50px_0px_#f43f5e] z-50  bg-white">
                <ul className="flex space-x-4">
                    <li>
                        <NavLink
                            to="/products/men"
                            className="hover:text-rose-500"
                        >
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/women"
                            className="hover:text-rose-500"
                        >
                            Women
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/kids"
                            className="hover:text-rose-500"
                        >
                            Kids
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/accessories"
                            className="hover:text-rose-500"
                        >
                            Accessories
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    to="/"
                    className="font-bold text-2xl hover:text-rose-500"
                >
                    Trend Setters
                </NavLink>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink to="/" className="hover:text-rose-500">
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-rose-500">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-rose-500">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Stores" className="hover:text-rose-500">
                            Stores
                        </NavLink>
                    </li>
                    <li className="space-x-4 flex">
                        <MagnifyingGlassIcon className="h-6 w-6 inline-block cursor-pointer hover:text-rose-500" />
                        <UserIcon className="h-6 w-6 inline-block cursor-pointer hover:text-rose-500" />
                        <HeartIcon className="h-6 w-6 inline-block cursor-pointer hover:text-rose-500" />
                        <div className="inline-block relative w-12">
                            <Link to="/cart">
                                <ShoppingCartIcon className=" inset-0 h-6 w-6 inline-block cursor-pointer hover:text-rose-500" />
                            </Link>
                            <span className="flex items-center justify-center absolute h-5 w-5 rounded-full bg-red-500 text-white text-center left-4 -top-2 z-10">
                                {cartItems.length}
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }, [cartItems.length]);
};
export default NavBar;
