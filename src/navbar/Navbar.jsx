import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search for a product or brand"
        />
      </div>
      <div className="account">
        <p>
          {" "}
          <i class="fas">&#xf406;</i>Account
        </p>
      </div>

      <div className="cart"><i class="fa-solid fa-cart-arrow-down"></i>Cart</div>

      <div class="dropdown">
                <button class="dropbtn">Makeup</button>
                <div class="dropdown-content">
                    <a href="../productpages/SkinCeuticals.html">View All Cousmetics</a>
                    <a href="../productpages/SkinMedica.html">Eye Shadows</a>
                    <a href="/manoj_kumar/Mascaras.html">Maskaras</a>
                    <a href="/manoj_kumar/Bronzers.html">Bronzers </a>
                    <a href="/manoj_kumar/Face Powders.html">Face Powders</a>
                    <a href="/manoj_kumar/foundation.html">Foundations</a>
                    <a href="/manoj_kumar/Lip_liners.html">Lips Liners</a>
                    <a href="/manoj_kumar/Lipsticks.html">Lipsticks</a> 
                    <a href="/manoj_kumar/Liquid_Lipstick.html">Liquid Lipsticks</a> 

                </div>
            </div>
    </div>
  );
};

export default Navbar;
