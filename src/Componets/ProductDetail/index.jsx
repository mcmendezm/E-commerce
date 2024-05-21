import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../Context";
import './styles.css'
import { useContext } from "react";

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail font-orbitron flex-col fixed right-0 border-4 border-customYellow  bg-black/90 rounded-lg text-white`}>
            <div className='flex justify-between items-center py-6 px-3'>
                <h2 className='font-medium text-4xl font-dancing text-customYellow'>Detail</h2>
                <IoCloseCircleOutline size={30}
                    className='cursor-pointer'
                    onClick={() => context.closeProductDetail()} />
            </div>
            <figure>
                <img className='productDetail-image w-full rounded-xl' src={context.productToShow.image} alt={context.productToShow.description} />
            </figure>
            <div className='productDetail-info p-5'>
                <h3 className='text-2xl '>{context.productToShow.title}</h3>
                <p className='my-2 text-customYellow text-xl'>${context.productToShow.price}</p>
                <p className='text-xs'>{ context.productToShow.description }</p>
            </div>
        </aside>
    )
}
export {ProductDetail}