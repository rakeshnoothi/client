import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return useMemo(() => {
        return (
            <footer className="flex space-x-4 p-4">
                <div className="flex flex-col space-y-2 w-1/4 flex-initial">
                    <span className="text-lg font-medium">Categories</span>
                    <NavLink to="/products">Men</NavLink>
                    <NavLink to="/products">Women</NavLink>
                    <NavLink to="/products">Kids</NavLink>
                    <NavLink to="/products">Accessories</NavLink>
                    <NavLink to="/products">New Arrivals</NavLink>
                </div>
                <div className="flex flex-col space-y-2 w-1/4 flex-initial">
                    <span className="text-lg font-medium">Links</span>
                    <span>FAQ</span>
                    <span>Stores</span>
                    <span>Pages</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="flex flex-col space-y-2 w-1/4 flex-initial">
                    <span className="text-lg font-medium">About</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus sint corrupti reiciendis recusandae
                        nulla ipsa odit ad culpa, quia praesentium quo unde
                        amet. Laudantium, vero dolore consequuntur at nulla
                        ducimus.
                    </p>
                </div>
                <div className="flex flex-col space-y-2 w-1/4 flex-initial">
                    <span className="text-lg font-medium">Contact</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates itaque nisi quod unde inventore ipsa, in
                        praesentium cumque libero recusandae vel, quis porro
                        quae, perspiciatis ducimus quos tempore quia nihil.
                    </p>
                </div>
            </footer>
        );
    }, []);
};
export default Footer;
