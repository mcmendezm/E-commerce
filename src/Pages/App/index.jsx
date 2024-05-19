import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvide } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../Componets/Navbar'
import './App.css'


function App() {
  return (
    <ShoppingCartProvide>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/my-order' element={<MyOrder/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvide>
  )
}

export default App
