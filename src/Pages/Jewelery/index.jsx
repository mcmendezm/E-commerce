import { useState, useEffect } from "react"
import { Card } from "../../Componets/Card"
import { Layout } from "../../Componets/Layout"
import { ProductDetail } from "../../Componets/ProductDetail"


function Jewelery() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data => setItems(data))
    },[])
    return (
        <Layout>

            <div className=" grid gap-10 grid-cols-4 w-full max-w-screen-lg my-20">  
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

export { Jewelery }