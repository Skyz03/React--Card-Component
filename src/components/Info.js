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

    <div className="card__buttons">
        <button className="email"><i class="fa-solid fa-envelope"></i>Email</button>
        <button className="linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
    </div>


    </div>
  );
};

export default Info;
