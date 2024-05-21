import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, orderToAdd]),
        context.setCartProducts([])
    }
    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} z-10 checkout-side-menu flex-col fixed right-0 border-4 border-customYellow  bg-white/95 rounded-lg text-black`}>
            <div className='flex justify-between items-center py-6 px-3'>
                <h2 className='font-medium text-4xl font-dancing'>My Order</h2>
                <IoCloseCircleOutline size={30}
                    className='cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className='font-orbitron overflow-y-auto flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 py-2 font-orbitron '>
                    <hr className="w-full border-2"/>
                <p className="flex justify-end py-2">
                    <span className="px-8">Total: </span>
                    <span>${totalPrice(context.cartProducts)}</span>
                </p>
                <button
                    className='bg-black h-20 px-20 my-1 mx-10 text-white font-orbitron rounded-lg text-lg'
                    onClick={()=>handleCheckout()}
                >Checkout</button>
            </div>
        </aside>
    )
}
export {CheckoutSideMenu} 