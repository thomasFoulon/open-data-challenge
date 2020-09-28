import React from 'react';
import TagLabel from '../../components/TagLabel/TagLabel';

import './Article.css';

function Article() {
  return (
    <div className="Article">
      <h1 className="Article__header">Challenge Open Data</h1>
      <div className="Article__tag-group">
        <TagLabel text="visualization" color="orange" />
        <TagLabel text="webDev" color="red" />
        <TagLabel text="react" color="blue" />
        <TagLabel text="data" color="black" />
      </div>
      <p className="Article__time">
        Redigé le 26 Septembre 2020・3 min lecture
      </p>

      <div className="Article__section">
        <h2 className="section__title">
          Introduction
        </h2>

        <p className="section__text">
          Le
          {' '}
          <strong>challenge Open Data</strong>
          {' '}
          est un projet d&apos;une semaine qui propose de réunir tout
          les éléments nécessaires pour la construction d&apos;une application de visualisation
          de données intéractive. Au delà de la réalisation technique, l&apos;acquisition de bonnes
          sources de données et leur représentation visuelles de façon ergonomique s&apos;avèrent
          primordiales.

        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Objectif
        </h2>

        <p className="section__text">
          L&apos;objectif de notre visualisation était de répondre à la question suivante :
          <strong> Quel est le pays qui offre les meilleurs conditions de vie ?</strong>
          {' '}
          Pour ce faire,
          nous nous sommes basées sur un ensemble d&apos;indicateurs sociales et économiques qui
          selon nous sont les plus pertinents.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Jeux de données
        </h2>

        <p className="section__text">
          Pour pouvoir comparer les différents pays du monde nous nous sommes basés sur
          les indicateurs suivants :
          <ul className="section__list">
            <li>PIB par habitant</li>
            <li>Taux de criminalité</li>
            <li>Qualité de transport</li>
            <li>Qualité de l&apos;éducation</li>
            <li>Taux de chômage</li>
            <li>Qualité de service de santé</li>
            <li>Pollution</li>
          </ul>
          Ces différents jeux de données proviennent principalement de
          {' '}
          <a className="section__link" href="https://data.worldbank.org/">World Bank Data</a>
          {' '}
          et de
          {' '}
          <a className="section__link" href="https://www.gapminder.org/">Gapminder</a>
          .
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Outils utilisés
        </h2>
        <p className="section__text">
          Pour la création de cette application on a fait appel à plusieurs outils qui sont :
          <ul className="section__list">
            <li>
              ReactJs:
              {' '}
              <span className="section_def">
                Une bibliothèque JavaScript pour la création d&apos;
                interface de site web.

              </span>
            </li>
            <li>
              Leaflet:
              {' '}
              <span className="section_def">
                est une bibliothèque JavaScript open-source moderne permettant l&apos;intégration de
                cartes interactives.
                {' '}
              </span>

            </li>
            <li>
              ChartJs:
              {' '}
              <span className="section_def">
                Un module qui nous a permis d&apos;intégrer des
                graphiques interactifs de façon efficace.

              </span>
            </li>

            <li>
              Github/Git:
              {' '}
              <span className="section_def">Nous avons utilisé ces outils de source </span>
            </li>

          </ul>
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Conclusion
        </h2>

        <p className="section__text">
          Sit et ea ad pariatur fugiat dolor do amet anim. Lorem
          incididunt tempor magna duis eiusmod qui pariatur cupidatat sint
          ex veniam nostrud. Elit cupidatat exercitation Lorem minim laborum

        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Bibliographie
        </h2>

        <p className="section__text">
          <div><a className="section__link" href="https://data.worldbank.org/" target="_blank" rel="noreferrer">World Bank Data</a></div>
          <div><a className="section__link" href="https://www.gapminder.org/" target="_blank" rel="noreferrer">Gapminder</a></div>
          <div><a className="section__link" href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></div>
          <div><a className="section__link" href="https://leafletjs.com/" target="_blank" rel="noreferrer">Leaflet</a></div>
          <div><a className="section__link" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">ChartJS</a></div>
        </p>
      </div>
    </div>
  );
}

export default Article;
