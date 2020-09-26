import React from 'react';

import {
  faGithub, faFacebook, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import placeholder from '../../assets/placeholder.png';
import './Author.css';

function Author({
  src, name, linkedin, github, facebook, twitter, isTeacher
}) {
  return (
    <div className="Author">
      <img className="Author__picture" src={src || placeholder} alt="author profile" />
      <div className="Author__data">
        <p className="Author__name">{name}</p>
        {isTeacher ? <p className="enseignant "> Enseignant</p> : (
          <ul className="Author__social-links">
            <li className="social__item">
              <a className="social__link" href={github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href={linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href={facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href={twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
          </ul>
        )}

      </div>
    </div>
  );
}

export default Author;
