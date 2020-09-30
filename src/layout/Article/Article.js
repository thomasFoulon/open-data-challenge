import React from 'react';
import TagLabel from '../../components/TagLabel/TagLabel';

import archi from '../../assets/COD_architecture.png';

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
          <strong>Challenge Open Data</strong>
          {' '}
          est un projet d&apos;une semaine qui propose de réunir tous
          les éléments nécessaires pour la construction d&apos;une application de visualisation
          de données intéractive. Au delà de la réalisation technique, l&apos;acquisition de bonnes
          sources de données et leur représentation visuelle de façon ergonomique s&apos;avèrent
          primordiales.

        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Objectif
        </h2>

        <p className="section__text">
          L&apos;objectif de notre visualisation était de répondre à la question suivante :
          <strong> Quel est le pays qui offre les meilleures conditions de vie ?</strong>
          {' '}
          Pour ce faire,
          nous nous sommes basés sur un ensemble d&apos;indicateurs sociaux et économiques qui
          selon nous sont les plus pertinents.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Jeux de données
        </h2>

        <p className="section__text">
          Pour pouvoir comparer les différents pays du monde, nous nous sommes basés sur
          les indicateurs suivants :
          <ul className="section__list">
            <li>
              PIB par habitant:
              {' '}
              <span className="section_def">
                en dollars
              </span>
            </li>
            <li>
              Taux de criminalité:
              {' '}
              <span className="section_def">
                Nombre d&apos;homicides volontaires pour 100.000 personnes
              </span>
            </li>
            <li>
              Qualité de transport:
              {' '}
              <span className="section_def">
                Qualité des infrastructures de transport et de logistique sur une échelle de 1 à 5
              </span>
            </li>
            <li>
              Qualité de l&apos;éducation:
              {' '}
              <span className="section_def">
                Taux d&apos;alphabétisation en % de la population agée de plus de 15 ans
              </span>
            </li>
            <li>
              Taux de chômage:
              {' '}
              <span className="section_def">
                En % de la force de travail totale
              </span>
            </li>
            <li>
              Qualité de service de santé:
              {' '}
              <span className="section_def">
                Dépenses pour la santé par habitant en dollars
              </span>
            </li>
            <li>
              Pollution:
              {' '}
              <span className="section_def">
                Emissions de CO2 en tonnes par habitant
              </span>
            </li>
            <li>
              Inégalité:
              {' '}
              <span className="section_def">
                Les différences de revenus au sein d&apos;une société
              </span>
            </li>
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
          Visualisation des données
        </h2>

        <p className="section__text">
          Pour pouvoir representer et croiser toutes ces données de la
          façon la plus expressive possible,
          nous avons opté pour l&apos;utilisation de deux représentation.

        </p>
        <ul className="section__list">
          <li>
            Représentation carthographique :
            {' '}
            <span className="section_def">
              est basée sur une carte où on peut distinguer les
              différents pays du monde. Elle nous permet de localiser géographiquement les
              informations. En effet, les surfaces des pays ont une couleur qui peut aller du
              rouge jusqu&apos;au vert et qui représente les conditions de vie de ce pays.

            </span>
          </li>
          <li>
            Représentation graphique :
            {' '}
            <span className="section_def">
              Pour la comparaison des différents pays du monde selon un indicateur bien précis,
              nous avons opté pour l&apos;utilisation des barplots. Ce choix nous a paru très
              intéressant en terme de visualisation puisqu&apos;il nous permet de distinguer
              très facilement les différences
              et nous permettra d&apos;aboutir à des conclusions adéquates.
              {' '}
            </span>

          </li>

        </ul>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Outils utilisés
        </h2>
        <p className="section__text">
          Pour la création de cette application on a fait appel à plusieurs outils qui sont :
          <ul className="section__list">
            <li>
              ReactJs :
              {' '}
              <span className="section_def">
                Une bibliothèque JavaScript pour la création d&apos;interface de site web dynamique.

              </span>
            </li>
            <li>
              Leaflet :
              {' '}
              <span className="section_def">
                Une bibliothèque JavaScript open-source moderne permettant l&apos;intégration de
                cartes interactives.
                {' '}
              </span>

            </li>
            <li>
              ChartJs :
              {' '}
              <span className="section_def">
                Un module qui nous a permis d&apos;intégrer des
                graphiques interactifs de façon efficace.

              </span>
            </li>

            <li>
              Github/Git :
              {' '}
              <span className="section_def">Nous avons utilisé ces outils pour la gestion de versions de notre projet à la fois au niveau local et distant. </span>
            </li>

          </ul>
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Architecture du projet
        </h2>

        <img src={archi} alt="architecture" className="img-archi" />

        <p className="section__text">
          Notre projet a été premièrement bootstrap avec le module npm
          {' '}
          <strong>create-react-app</strong>
          , ensuite, nous l&apos;avons réparti en plusieurs dossiers et sous dossiers
          pour maintenir une bonne organisation et faciliter ainsi l&apos;implémentation
          de chaque fonctionnalité.
        </p>

        <p>
          En effet, dans le dossier
          <strong> src</strong>
          , nous avons plusieurs sous-dossiers, notamment :
          <ul className="section__list">
            <li>
              <string>api</string>
              <span className="section_def">
                {' '}
                qui regroupe toutes les requêtes HTTP vers World Bank, en plus des fonctions de
                traitements de données.
                {' '}
              </span>
            </li>
            <li>
              <string>assets</string>
              <span className="section_def">
                {' '}
                qui regroupe toutes les images, icônes et des données JSON sur la qualité du
                transport récoltées sur Gapminder.
                {' '}
              </span>
            </li>
            <li>
              <string>components</string>
              <span className="section_def">
                {' '}
                qui regroupe certains composants importants pour organiser le code et permettre
                la réutilisabilité de blocs de code.
                {' '}
              </span>
            </li>
            <li>
              <string>layout & pages</string>
              <span className="section_def">
                {' '}
                qui regroupent les différentes pages et sections de l&apos;interface de
                notre projet, par exemple : la map, le graphique et le rapport.
                {' '}
              </span>
            </li>
          </ul>
        </p>

        <p className="section__text">
          En ce qui concerne les données adoptées, nous avons utilisé l&apos;API de World Bank
          pour récupérer les valeurs de 6 indicateurs pour tous les pays.
          Cependant, n&apos;ayant pas trouvé l&apos;indicateur
          {' '}
          <strong>Qualité de transport</strong>
          , nous avons opté cette fois-ci pour Gapminder, où nous avons trouvé
          les données en csv et que nous avons converties en JSON pour tout uniformiser.
        </p>

      </div>
      <div className="Article__section">
        <h2 className="section__title">
          Traitement de données
        </h2>
        <p className="section__text">
          Nous avons traité toutes les données récupérées de sources différentes
          pour créer une source commune (
          {' '}
          <strong>un tableau d&apos;objets</strong>
          {' '}
          ) regroupant directement tous les pays et les valeurs des indicateurs
          leur correspondant. Ainsi, la visualisation devient nettement plus abordable.

        </p>
        <p className="section__text">
          De plus, en ce qui concerne la map, nous calculons un
          {' '}
          <strong>score</strong>
          {' '}
          pour chaque pays selon les valeurs des indicateurs et le classement choisi
          par l&apos;utilisateur, ce qui permettra de donner une idée sur les pays ayant
          les meilleures conditions par ordre de couleur sur la map.
        </p>

      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Conclusion
        </h2>

        <p className="section__text">
          Ce projet est le fruit d&apos;un travail d&apos;équipe !
          Chaque instant que nous avons passé lors de la création de
          ce dernier était un instant de plaisir. Certe il reste beaucoup d&apos;amélioration
          à faire mais nous avons appris beaucoup de notions sur la visualisation de
          données qui nous seront très utiles dans notre monde professionnel.
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
