import React, { useEffect, useState } from "react";
import "./viewall.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Viewall = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((d) => {
        setproduct(d.data);
      });
  }, []);

  console.log(product);

  return (
    
     
    <div className="main">
          <Link to="/">Home</Link>

      <div>
        <h3>View All Skincare</h3>
        <h2>MAYBELINE PRODUCTS</h2>
        <p>
          Radiant skin starts with effective skincare, and here at SkinStorewe
          have curated the very best skincare brands. Shop with the peace ofmind
          of our 20 years experience as an authorized retailer for brandssuch as
          Arcona, Caudalie, Dermalogica, Elizabeth Arden, First Aid Beauty,
          Murad, Obagi, SkinCeuticals, SkinMedica, StriVectin & manymore! Take
          your pick from cleansers, moisturizers, masks, serums andmore to teat
          all your skincare concerns from anti-aging to acne.
        </p>
      </div>

      {product.map((e) => (
        <div className="map">
          <img src={e.image_link} alt="" />
          <h5>{e.description}</h5>
          <h4>${e.price}</h4>
          <button>SHOP NOW</button>
        </div>
      ))}
    </div>
  );
};

export default Viewall;
