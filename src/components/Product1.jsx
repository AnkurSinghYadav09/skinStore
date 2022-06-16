import React from "react";
import "./Product1.css";

const Product1 = (props) => {
  console.log(props.Data);
  return (
    <div>
      {props.Data.map((e) => (
        //   console.log(e)
        <div className="circle">
          <img src={e.productPic} alt="" />
          <p>{}</p>
        </div>
      ))}
    </div>
  );
};

export default Product1;
