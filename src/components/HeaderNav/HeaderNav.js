import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { sections } from '../../utils/constants';

import './HeaderNav.css';

function HeaderNav({ section, onSectionChange }) {
  return (
    <nav className="Header__nav">
      <ul className="Header__list">
        <li
          className={`Header__item ${section === sections.MAP ? 'Header__item--selected' : ''}`}
        >

          <HashLink
            to="/#Map"
            className="Header__link Header__link--1"
            onClick={() => {
              if (section !== sections.MAP) onSectionChange(sections.MAP);
            }}
          >
            Map
          </HashLink>
        </li>

        <li className={`Header__item ${section === sections.CHART ? 'Header__item--selected' : ''}`}>
          <HashLink
            to="/#ChartBoard"
            className="Header__link Header__link--2"
            onClick={() => {
              if (section !== sections.CHART) onSectionChange(sections.CHART);
            }}
          >
            Charts

          </HashLink>
        </li>

        <li className={`Header__item ${section === sections.REPORT ? 'Header__item--selected' : ''}`}>
          <Link
            to="/report"
            className="Header__link Header__link--3"
            onClick={() => {
              if (section !== sections.REPORT) onSectionChange(sections.REPORT);
            }}
          >
            Report
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default HeaderNav;
