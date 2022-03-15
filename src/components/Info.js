import React from "react";
import pic from "../pic.png";

const Info = () => {
  return (
    <div>
      <img src={pic} alt='profile-pic' />

      <div className='card__text'>
        <h2 className="card__name">Laura Smith</h2>
        <p className="card__position">FrontEnd Developer</p>
        <p className="card__site">laurasmith.website</p>
      </div>
    </div>
  );
};

export default Info;
