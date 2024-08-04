import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Addproduct from './Components/Admin/Addproduct'
import Home from './Components/Home/Home'
import Womens from './Components/Womens/Womens'
import MoreAboutProduct from './Components/ProductDetails/ProductDetails'
import Dashboard from './Components/Admin/Dashboard'
import ManagePorduct from './Components/Admin/ManagePorduct'
import UpdatePorduct from './Components/Admin/UpdateProduct'
import ContactUs from './Components/Contactus/ContactUs'
import MangaeContactForm from './Components/Admin/MangaeContactForm'
import PriceDrop from './Components/Discount/PriceDrop'
import NewProductes from './Components/New Porducts/NewProductes'
import BestSales from './Components/Best Sales/BestSels'
import About from './Components/About/About'
import Delivery from './Delivery/Delivery'
import TermsandConditons from './Components/TermsandConditions/TermsandConditons'
import ReturnPolicy from './Components/ReturnPolicy/ReturnPolicy'
import Login from './Components/Register/Login'
import Register from './Components/Register/Register'
import DeleteProduct from './Components/Admin/DeleteProduct'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Men from './Components/Men/Men'
import Cart from './Components/Cart/Cart'
import Kid from './Components/Kid/Kid'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Womens/>}/>
            <Route path='moreaboutproduct' element={<MoreAboutProduct/>}/>
            <Route path='pricedrop' element={<PriceDrop/>}/>
            <Route path='newproducts' element={<NewProductes/>}/>
            <Route path='bestsales' element={<BestSales/>}/>
            <Route path='contactus' element={<ContactUs/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='delivery' element={<Delivery/>}/>
            <Route path='termsandconditions' element={<TermsandConditons/>}/>
            <Route path='returnpolicy' element={<ReturnPolicy/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='/productdetail/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/kid' element={<Kid/>}/>
            
          </Route>

        {/* Admin Routing */}

          <Route path='/Admin/dashboard' element={<Dashboard/>}/>
          <Route path='Admin/AddProduct' element={<Addproduct/>}/>
          <Route path='Admin/manageproduct' element={<ManagePorduct/>}/>
          <Route path='Admin/updateproduct/:id' element={<UpdatePorduct/>}/>
          <Route path='Admin/deleteproduct/:id' element={<DeleteProduct/>}/>
          <Route path='Admin/managecontactform' element={<MangaeContactForm/>}/>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
