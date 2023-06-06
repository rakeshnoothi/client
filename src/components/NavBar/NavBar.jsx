import {
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="flex justify-between p-4 sticky top-0 shadow-[0px_-24px_50px_0px_#f43f5e]">
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="/products" className="hover:text-rose-500">
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="hover:text-rose-500">
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="hover:text-rose-500">
                        Kids
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="hover:text-rose-500">
                        Accessories
                    </NavLink>
                </li>
            </ul>
            <NavLink to="/" className="font-bold text-2xl hover:text-rose-500">
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
                        <ShoppingCartIcon className=" inset-0 h-6 w-6 inline-block cursor-pointer hover:text-rose-500" />
                        <span className="flex items-center justify-center absolute h-5 w-5 rounded-full bg-red-500 text-white text-center left-4 -top-2 z-10">
                            0
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
