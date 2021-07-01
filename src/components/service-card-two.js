import React from "react";
import { Link } from "gatsby";

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title, price} = data;
  return (
    <Link className="icon_box_1 text-center" to={url}>
      <div className="flipper">
        <div className="front">
          <i className={iconName}></i>
          <h3>{title}</h3>
          <h3>{price}</h3>
        </div>
        <div className="back">
          <i className={iconName}></i>
          <h3>{title}</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardTwo;
