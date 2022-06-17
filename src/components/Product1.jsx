import React from "react";
import "./Product1.css";

const Product1 = (props) => {
  console.log(props.Data);
  return (
    <div className="main">
      {props.Data.map((e) => (
        //   console.log(e)
        <div className="circle">
          <img src={e.productPic} alt="" />
          <p>{e.productName}</p>
          <h5>${e.priceOfProduct}</h5>
          <button>SHOP NOW</button>
        </div>
      ))}
    </div>
  );
};

export default Product1;
