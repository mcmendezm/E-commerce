import { useContext } from "react"
import { Card } from "../../Componets/Card"
import { Layout } from "../../Componets/Layout"
import { ProductDetail } from "../../Componets/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {
    const context = useContext(ShoppingCartContext);
        const renderView = () => {
        if (context.searchByTitle?.length > 0) {
        if (context.filteredItems?.length > 0) {
            return (
            context.filteredItems?.map(item => (
                <Card key={item.id} data={item} />
            ))
            )
        } else {
            return (
            <div>We dont have anything </div>
            )
        }
        } else {
        return (
            context.items?.map(item => (
            <Card key={item.id} data={item} />
            ))
        )
        }
    }
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-dancing mt-10 mb-4"> Exclusive Products</h1>
            </div>
            <input
                className="rounded-lg font-orbitron border text-sm border-black p-3 mb-8 w-96 focus:outline-customYellow"
                type="text"
                placeholder="Search a product"
                onChange={(event)=> context.setSearchByTitle(event.target.value)}
            />
            <div className=" grid gap-10 grid-cols-4 w-full max-w-screen-lg ">  
            {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }