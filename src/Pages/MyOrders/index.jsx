import { useContext } from "react";
import { Layout } from "../../Componets/Layout"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Componets/OrdersCard";


function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>

            <h1 className="text-2xl font-dancing my-10 "> My Orders</h1>
            {
                context.order.map((order, index) => {
                    return (    
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            date={order.date}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>
                    )
                })
            }
            
        </Layout>
    )
    }

export { MyOrders }
