import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="nav" >
        <div className="logo">
            <img src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="" />
        </div>
        <div className="search">search</div>
        <div className="account">account</div>
        <div className="cart">cart</div>
    </div>
  )
}

export default Navbar