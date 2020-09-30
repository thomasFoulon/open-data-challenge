import React from 'react';
import { HashLink } from 'react-router-hash-link';

import LogoImage from '../../assets/Logo.png';

import './Logo.css';

function Logo({ className }) {
  return (
    <HashLink to="/#Map" className="Header__link Header__link--1">
      <div className={`Logo ${className || ''}`}>
        <img className="Logo__image" src={LogoImage} alt="logo data vision circle gradient" />
        <h1 className="Logo__text">
          OpenVision
        </h1>
      </div>
    </HashLink>
  );
}

export default Logo;
