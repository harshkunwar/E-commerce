import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const {product} = props;
  //   console.log(Product.category);
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
      {/* <img src={arrow_icon} alt="" />
      {product.id} */}
    </div>
  );
};

export default Breadcrum;
