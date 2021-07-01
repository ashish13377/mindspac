import React from "react";
import { Link } from "gatsby";

const ServiceCardOneUsa = ({ data }) => {
  const { title, text, iconName, url, } = data;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      
    
      <Link className="commons_btn red_bgs"  to={url}> <span> discover more </span></Link>
      
    </div>
  );
};

export default ServiceCardOneUsa;
