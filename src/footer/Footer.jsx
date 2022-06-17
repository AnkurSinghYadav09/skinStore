import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="help">
      <div class="information">
        <p>Help & Information</p>
        <div className="help_box">
          <i class="fa-solid fa-phone"></i>
          <p>Customer Service</p>
        </div>
        <div className="help_box">
          <i class="fa-solid fa-truck"></i>
          <p>Delivery Information</p>
        </div>
        <div className="help_box">
          <i class="fa-solid fa-rotate"></i>
          <p>Returns & Refunds</p>
        </div>
        <div className="help_box">
          <i class="fa-solid fa-question"></i>
          <p>Help Center</p>
        </div>
        <div className="help_box">
          <p>COVID-19 Information</p>
        </div>
        <div className="help_box">
          <p>Accessibility</p>
        </div>
        <div className="help_box">
          <i class="fa-solid fa-cookie"></i>
          <p>Cookie Settings</p>
        </div>
      </div>
      {/* // about */}

      <div class="about">
        <div>
          <ul>
            <li>
              <p>About SkinStore</p>
              <ul>
                <li>Key Workers Discount</li>
                <br />
                <li>About Us</li>
                <br />
                <li>Affiliate Program</li>
                <br />
                <li>Brand Directory</li>
                <br />
                <li>Coupon Codes</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* cookies */}

      <div>
        <ul>
          <li>
            <p>Legal</p>
            <ul>
              <li>Cookie Information</li>
              <br />
              <li>Privacy Policy</li>
              <br />
              <li>Terms & Conditions</li>
              <br />
              <li>Modern Slavery Statement</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <p>How to contact us</p>
            <ul>
              <li>meassage us</li>
              <br />
              <li>Privacy Policy</li>
              <br />
              <li>Terms & Conditions</li>
              <br />
              <li>Modern Slavery Statement</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>

      {/* pay */}
      <div id="lastfoot">
        <div id="blf">
          <h1>T H G</h1>
          <p>2022 The Hut.com Ltd.</p>
        </div>
        <div id="lfimg">
          <h4>Pay securely with</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
            alt=""
          />
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072016/untitled-1_137.png?itok=_QrtgEVI"
            alt=""
          />
          <img
            src="https://play-lh.googleusercontent.com/I4PUA84FZYcguGIlQyr6doTVTU4JTpOlJWXkriB_g_VNvx9gCfI6S_B--TgZcULpeZbk"
            alt=""
          />
          <img
            src="https://icon-library.com/images/diners-club-icon/diners-club-icon-3.jpg"
            alt=""
          />
          <img
            src="https://icon-library.com/images/discover-card-icon/discover-card-icon-14.jpg"
            alt=""
          />
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2019/09/maestro-vector-logo-small.png"
            alt=""
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Logo-2007-2014.png"
            alt=""
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/alipay-logo.svg"
            alt=""
          />
          <img
            src="https://logowik.com/content/uploads/images/afterpay-new-20215837.jpg"
            alt=""
          />
          <img
            src="https://mumbrella.com.au/wp-content/uploads/2021/07/Zip-logo-16-9-e1626913893928.png"
            alt=""
          />
          <img
            src="https://getlogo.net/wp-content/uploads/2021/06/sezzle-logo-vector.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
