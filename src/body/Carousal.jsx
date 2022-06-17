import React from "react";
import { Carousel } from "react-responsive-carousel";

import CircleProducts from "./CircleProducts";

const Carousal = () => {
  return (
    <div>
      
      <Carousel autoPlay infiniteLoop>
        <div>
          <img
            alt=""
            src="https://guileless-custard-2b667a.netlify.app/HOME-PAGE/slidingImage2.PNG"
          />
          <p className="legend">product 1</p>
        </div>
        <div>
          <img
            alt=""
            src="https://guileless-custard-2b667a.netlify.app/HOME-PAGE/slidingImage1.PNG"
          />
          <p className="legend">product 2</p>
        </div>
        <div>
          <img
            alt=""
            src="https://guileless-custard-2b667a.netlify.app/HOME-PAGE/slidingImage3.PNG"
          />
          <p className="legend">product 3</p>
        </div>
        <div>
          <img
            alt=""
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/22/0519-STDCRE-36320-SS-LW-May-Beauty-Bag-Amend-1180x450-022122.jpg"
          />
          <p className="legend">product 4</p>
        </div>
        <div>
          <img
            alt=""
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/42/original-0531-STDCRE-36879-AP-SS-JUNE-SUMMER-SHOT-03-1180x450-063342.jpg"
          />
          <p className="legend">product 5</p>
        </div>
      </Carousel>

      <CircleProducts/>
    </div>
  );
};

export default Carousal;
