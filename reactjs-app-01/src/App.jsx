import Navbar from "./components/navbar/Navbar"
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import CartPage from "./pages/cart/CartPage"
import PlaceOrderPage from "./pages/placeOrder/PlaceOrderPage"

function App() {
  return (
    <BrowserRouter>
        <div className="app">
        <Navbar/>
    <Routes>
      <Route path= '/' element= {<HomePage/>}/>
      <Route path = '/cart' element = {<CartPage/>} />
      <Route path = '/order' element = {<PlaceOrderPage/>}/>
    </Routes>
   
    </div>
    </BrowserRouter>
  )
}

export default App
