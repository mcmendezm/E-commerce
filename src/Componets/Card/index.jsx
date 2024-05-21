import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { IoBagCheck } from "react-icons/io5";

const Card = (data) => {
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail()
        console.log('CART: ', context.cartProducts)
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return (
                <button
                        className="absolute top-0 right-0 flex justify-center items-center bg-lime-600 w-8 h-8 rounded-full m-2 p-1 text-lg text-white"
                        >
                    <IoBagCheck />
                </button>
            )
        } else {
            return (
                <button
                        className="absolute top-0 right-0 flex justify-center items-center bg-customYellow w-8 h-8 rounded-full m-2 p-1 text-lg"
                        onClick={(event) => addProductsToCart(event, data.data)}>
                    <MdAdd />
                </button>
            )
            }
    }
    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg "
            onClick={()=>showProduct(data.data)}
        >
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
                    {data.data.category}
            </span>
            <img className="w-full h-full object-cover rounded-3xl" src={data.data.image} alt="Headphones" />
            {renderIcon(data.data.id)}
        </figure>
        <p className="flex justify-between font-orbitron ">
                <span className="text-xs font-light">{data.data.title}</span>
            <span className="text-lg font-medium">${data.data.price}</span>
        </p>
        </div>
    )
}
export {Card}