import React from 'react';

import ensimagLogo from '../../assets/ensimag.png';
import gapminderLogo from '../../assets/gapminder.png';
import worldBankLogo from '../../assets/world-bank.png';

import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      &copy; Copyrights 2020. Réalisé par ELMOURADI Amine, EL MOURADI Imane,
      FOULON Thomas, GAISNE Anne et ALLALI Oussama.
      <div className="Footer__links">
        <a
          href="https://ensimag.grenoble-inp.fr/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="Footer__image" src={ensimagLogo} alt="" />
        </a>

        <a href="https://data.worldbank.org/" target="_blank" rel="noreferrer">
          <img className="Footer__image" src={worldBankLogo} alt="" />
        </a>

        <a href="https://www.gapminder.org/" target="_blank" rel="noreferrer">
          <img className="Footer__image" src={gapminderLogo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
