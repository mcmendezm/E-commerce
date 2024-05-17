import { NavLink } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <ul>
                <li>
                    <NavLink to='/shopi'>
                        Shopi
                    </NavLink>
                    <NavLink to='/'>
                        All
                    </NavLink>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                    <NavLink to='/furnitures'>
                        Furnitures
                    </NavLink>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink >
                        Camila@gmail.com
                    </NavLink>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                    <NavLink to='/my-account'>
                        My account
                    </NavLink>
                    <NavLink to='/sign-in'>
                        Sign In
                    </NavLink>
                    <NavLink to='/my-order'>
                        <FaCartPlus />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export {Navbar}