import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvide } from '../../Context'
import { Home } from '../Home'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Componets/Navbar'
import { CheckoutSideMenu } from '../../Componets/CheckoutSideMenu'
import { Jewelery } from '../Jewelery'
import { Electronics } from '../Electronics'
import { WomenClothing } from '../WomenClothing'
import { MenClothing } from '../MenClothing'
import './App.css'


function App() {
  return (
    <ShoppingCartProvide>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/my-order' element={<MyOrder />} />
          <Route path='/my-orders/last' element={<MyOrder />} />
          <Route path='/my-orders/:id' element={<MyOrder/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/men-clothing' element={<MenClothing />} />
          <Route path='/women-clothing' element={<WomenClothing />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/jewelery' element={<Jewelery />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvide>
  )
}

export default App
