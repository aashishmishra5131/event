import React from 'react'
import Navbar from './Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import AddEvent from './components/AddEvent'
import AdminLogin from './Admin/AdminLogin'
import SignUp from './components/SignUp'
import UserLogin from './components/UserLogin'
import VendorLogin from './vendor/VendorLogin'
import AdminSignUp from './Admin/AdminSignUp'
import AdminPage from './Admin/AdminPage'
import VendorSignUp from './vendor/VendorSignUp'
import VendorPage from "./components/VendorPage"
import Product from "./components/Product"
const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/vendorlogin' element={<VendorLogin/>}/>
      <Route path='/vendorsignup' element={<VendorSignUp/>}/>
      <Route path='/vendorpage' element={<VendorPage/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/addevent' element={<AddEvent/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/AllProduct' element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
