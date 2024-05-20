import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvide = ({ children }) => {
ShoppingCartProvide.propTypes = {
        children: PropTypes.node.isRequired,
    }
    //Shopping Cart - Incremente quantity
    const [count, setCount] = useState(0)
    //Shopping Cart - Add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});
    
    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                setIsProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
            }}>
        {children}
    </ShoppingCartContext.Provider>
    )
}