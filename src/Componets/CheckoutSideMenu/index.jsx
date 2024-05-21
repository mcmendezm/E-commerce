import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import './styles.css'
import { OrderCard } from "../OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} z-10 checkout-side-menu flex-col fixed right-0 border-4 border-customYellow  bg-white/95 rounded-lg text-black`}>
            <div className='flex justify-between items-center py-6 px-3'>
                <h2 className='font-medium text-4xl font-dancing'>My Order</h2>
                <IoCloseCircleOutline size={30}
                    className='cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className='font-orbitron overflow-y-auto'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}
export {CheckoutSideMenu} 