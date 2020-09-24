import React from 'react';
import LogoImage from '../../assets/img/Logo.png';

import './Logo.css';

function Logo({ className }) {
  return (
    <div className={`Logo ${className || ''}`}>
      <img className="Logo__image" src={LogoImage} alt="logo data vision circle gradient" />
      <h1 className="Logo__text">
        OpenVision
      </h1>
    </div>
  );
}

export default Logo;
