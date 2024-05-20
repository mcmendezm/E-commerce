import { useState, useEffect } from "react"
import { Card } from "../../Componets/Card"
import { Layout } from "../../Componets/Layout"
import { ProductDetail } from "../../Componets/ProductDetail"
/* import { ShoppingCartProvide } from "../../Context" */

function Home() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    },[])
    return (
        <Layout>
            Home
            <div className=" grid gap-10 grid-cols-4 w-full max-w-screen-lg">  
            {
                items?.map(item => (
                    <Card data={item} key={ item.id} />
                ))
            }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }