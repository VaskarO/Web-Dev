import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {
    const [menu, setmenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo' />
        <ul className="navbar-menu">
            <li onClick={()=>setmenu("home")} className={menu =="home"?"active":""}>Home</li>
            <li onClick={()=>setmenu("store")} className={menu =="store"?"active":""}>Store</li>
            <li onClick={()=>setmenu("mobile-app")} className={menu =="mobile-app"?"active":""}>Mobile app</li>
            <li onClick={()=>setmenu("contact")} className={menu =="contact"?"active":""}>Contact</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.cart} alt="" />
                <div className = "dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}> Sign in</button>
        </div>
    </div>
  )
}

export default Navbar