import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
        const activeStyle = "underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-xs font-light font-orbitron">
            <ul className="flex items-center gap-5">
                <li className="font-semibold text-4xl font-dancing mr-10">
                    <NavLink
                        to='/shopi'
                        >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-5">
                <li>
                    <NavLink className='text-black/50'>
                        camila@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-order'>
                        <FaCartPlus />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };
