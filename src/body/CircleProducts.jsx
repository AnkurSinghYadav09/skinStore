import axios from "axios";
import React, { useEffect, useState } from "react";
import Product1 from "../components/Product1";

const CircleProducts = () => {
    const [data, setdata] = useState([])
  useEffect(() => {
    axios.get("https://projectskinstore.herokuapp.com/product1").then((d) => {
      setdata(d.data.Products);
    });
  }, []);

//   console.log(data)

  return (
    <div>
      <h2>Trending Offers</h2>

      <div>
        {/* {data.map((e)=>( */}
            <Product1 Data={data} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default CircleProducts;
