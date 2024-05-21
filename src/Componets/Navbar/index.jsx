import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";


const Navbar = () => {
    const activeStyle = "underline underline-offset-4 text-customYellow"
    const context= useContext(ShoppingCartContext)
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light font-orbitron bg-black text-white h-68">
            <ul className="flex items-center gap-5">
                <li className="font-semibold text-4xl font-dancing mr-10">
                    <NavLink
                        to='/'
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
                        to='/men-clothing'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Men&apos;s Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/women-clothing'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Women&apos;s Clothing 
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
                    to='/jewelery'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Jewelery
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
                    <NavLink className='text-white/50'>
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
                    <NavLink to='/my-order' className='relative text-xs'>
                        <FaCartPlus size={20}/>
                        <span className='bg-customYellow  absolute bottom--1 left-4 w-4 h-4 rounded-full flex justify-center text-black'>{context.count}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };
