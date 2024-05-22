import { createContext, useEffect, useState } from 'react';
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
    //Shopping Cart - Order
    const [order, setOrder] = useState([]);

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
    //Get Products
    const [items, setItems] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)
    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('Search', searchByTitle)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
    console.log('filter', filteredItems)
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
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
            }}>
        {children}
    </ShoppingCartContext.Provider>
    )
}