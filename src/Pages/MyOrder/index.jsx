import { Layout } from "../../Componets/Layout"
import { OrderCard } from "../../Componets/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            <div className="flex justify-center items-center relative w-80 my-10">
                <Link to='/my-orders' className='absolute left-0'>
                    <FaChevronLeft className="cursor-pointer" />
                </Link>
                <h1 className="text-2xl font-dancing "> My Order</h1>
            </div>
            <div className='flex flex-col'>
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
                }
            </div>
        </Layout>
    )
    }

export { MyOrder }