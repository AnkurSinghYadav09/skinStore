import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img
              src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
              alt=""
            />
          </div>
        </Link>
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

        <div className="cart">
          <i class="fa-solid fa-cart-arrow-down"></i>Cart
        </div>
      </div>
      {/* dropdown buttons */}

      <div class="dropdown">
        <button class="dropbtn">Makeup</button>
        <div class="dropdown-content">
          <nav>
            <Link to="/viewall">View All Cousmetics</Link>
          </nav>

          <a href="##">Eye Shadows</a>
          <a href="##">Maskaras</a>
          <a href="##">Bronzers </a>
          <a href="##">Face Powders</a>
          <a href="##">Foundations</a>
          <a href="##">Lip Liners</a>
          <a href="##">Lipsticks</a>
          <a href="##">Liquid Lipsticks</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Summer Shop</button>
        <div class="dropdown-content">
          <a href="##">sunless tanning </a>
          <a href="##">Hair care</a>
          <a href="##">Maskaras</a>
          <a href="##">Bronzers </a>
          <a href="##">Face Powders</a>
          <a href="##">Foundations</a>
          <a href="##">Lips Liners</a>
          <a href="##">Lipsticks</a>
          <a href="##">Liquid Lipsticks</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Skin Care</button>
        <div class="dropdown-content">
          <a href="##">View All Skin Care</a>
          <a href="##">New In</a>
          <a href="##">Clear SkinCare</a>
          <a href="##">5*Rated Products</a>
          <a href="##">Gifts & Sets</a>
          <a href="##">Supersizes & Duo</a>
          <a href="##">Travel Sizes</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Sale</button>
        <div class="dropdown-content">
          <a href="##">Sale</a>
          <a href="##">Clearance</a>
          <a href="##">Gifts and Sets</a>
          <a href="##">All Coupons</a>
          <a href="##">Featured Offers</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Build a Routine</button>
        <div class="dropdown-content">
          <a href="##">Dry Skin Routine</a>
          <a href="##">Normal Skin Rountine</a>
          <a href="##">Oil Skin Routine</a>
          <a href="##">Combination Skin Routine</a>
          <a href="##">Sensative Skin Routine</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Hair</button>
        <div class="dropdown-content">
          <a href="##">Shampoo</a>
          <a href="##">Conditioners</a>
          <a href="##">Hair Treatments</a>
          <a href="##">Hair masks</a>
          <a href="##">Hair Oils</a>
          <a href="##">Hairs Sprays</a>
          <a href="##">Hairs Styling</a>
          <a href="##">Hair Styling</a>
          <a href="##">Hair Thinning & Loss</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Tools</button>
        <div class="dropdown-content">
          <a href="##">View all Tools</a>
          <a href="##">Hair Dryers</a>
          <a href="##">Flat Irons</a>
          <a href="##">Rollers & Curling</a>
          <a href="##">Hair Brushes</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Bath & Body</button>
        <div class="dropdown-content">
          <a href="##">View All Bath & Body</a>
          <a href="##">New In</a>
          <a href="##">Clean Bath & body</a>
          <a href="##">Travel Sizes</a>
          <a href="##">At Home Spa</a>
          <a href="##">Deodorants</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Self-Care</button>
        <div class="dropdown-content">
          <a href="##">Self Care</a>
          <a href="##">New In</a>
          <a href="##">5*Rated Products</a>
          <a href="##">At-Home Spa</a>
          <a href="##">View All Wellness Products</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Fragrance</button>
        <div class="dropdown-content">
          <a href="##">Neom Organics</a>
          <a href="##">Glass Houses Fragrances</a>
          <a href="##">Korres</a>
          <a href="##">Nest Fragrances</a>
          <a href="##">Molton Brown</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">New</button>
        <div class="dropdown-content">
          <a href="##">Alpha-H</a>
          <a href="##">Alo</a>
          <a href="##">Foria</a>
          <a href="##">Nion</a>
          <a href="##">Sulwhasoo</a>
          <a href="##">Cowshed</a>
          <a href="##">Patrikes</a>
          <a href="##">Marvis</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Advice</button>
        <div class="dropdown-content">
          <a href="##">SkinCare</a>
          <a href="##">MakeUp</a>
          <a href="##">HairCare</a>
          <a href="##">Body</a>
          <a href="##">Tips & Advice</a>
          <a href="##">Beauty Centers</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
