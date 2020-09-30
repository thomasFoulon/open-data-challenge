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
              PIB par habitant :
              {' '}
              <span className="section_def">
                En dollars
              </span>
            </li>
            <li>
              Taux de criminalité :
              {' '}
              <span className="section_def">
                Nombre d&apos;homicides volontaires pour 100.000 personnes
              </span>
            </li>
            <li>
              Qualité de transport :
              {' '}
              <span className="section_def">
                Qualité des infrastructures de transport et de logistique sur une échelle de 1 à 5
              </span>
            </li>
            <li>
              Qualité de l&apos;éducation :
              {' '}
              <span className="section_def">
                Taux d&apos;alphabétisation en % de la population agée de plus de 15 ans
              </span>
            </li>
            <li>
              Taux de chômage :
              {' '}
              <span className="section_def">
                En % de la force de travail totale
              </span>
            </li>
            <li>
              Qualité de service de santé :
              {' '}
              <span className="section_def">
                Dépenses pour la santé par habitant en dollars
              </span>
            </li>
            <li>
              Pollution :
              {' '}
              <span className="section_def">
                Emissions de CO2 en tonnes par habitant
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
          Traitement de données
        </h2>
        <p className="section__text">
          Nous avons traité toutes les données récupérées de sources différentes
          pour créer une source commune,
          {' '}
          <strong>un tableau d&apos;objets</strong>
          , regroupant directement tous les pays et les valeurs des indicateurs
          leur correspondant. Ainsi, la visualisation devient nettement plus abordable.

        </p>
        <p className="section__text">
          Avec ce tableau, nous calculons un
          {' '}
          <strong>score</strong>
          {' '}
          pour chaque pays selon les valeurs des indicateurs et le classement choisi
          par l&apos;utilisateur. Cela permet de donner une idée sur les pays ayant
          les meilleures conditions de vie. Ce score est la moyenne pondérée des indicateurs
          normalisés en indice sans dimension. La pondération se fait avec les poids
          indiqués par l&apos;utilisateur à l&apos;aide de la liste.
          L&apos;indice pour un indicateur donné est égal à :
          (valeur pour le pays - valeur minimale)/(valeur maximale - valeur minimale)
        </p>

      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Visualisation des données
        </h2>

        <p className="section__text">
          Pour pouvoir représenter et croiser toutes ces données de la
          façon la plus expressive possible,
          nous avons opté pour l&apos;utilisation de deux représentations.

        </p>
        <ul className="section__list">
          <li>
            Représentation carthographique :
            {' '}
            <span className="section_def">
              elle permet de distinguer quels pays du monde correspond le plus aux
              critères de l&apos;utilisateur. Elle localise géographiquement les
              informations en mettant parfois en lumière les zones du globe désavantagées par le
              choix de l&apos;ordre des indicateurs pris en compte. Pour ce faire, un gradient
              indique les pays en fonction de leur score.

            </span>
          </li>
          <br />
          <li>
            Représentation graphique :
            {' '}
            <span className="section_def">
              Pour la comparaison des différents pays du monde selon un indicateur bien précis,
              nous avons opté pour l&apos;utilisation des barplots. Ce choix permet de distinguer
              très facilement les différences entre pays tout en accédant à une donnée
              plus détaillée.
              {' '}
            </span>

          </li>

        </ul>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Intéraction
        </h2>

        <p className="section__text">
          La liste drag and drop des indicateurs permet à l&apos;utilisateur
          de les trier simplement. Les scores obtenus sont alors visibles
          en survolant les pays sur la carte. De plus, un clic sur un pays
          permet de mettre à jour la liste des pays représentés sur les graphiques.
          Cela l&apos;ajoute s&apos;il n&apos;y était pas, ou le retire
          s&apos;il était déjà présent.
        </p>

        <p className="section__text">
          Il est aussi possible de contrôler les pays représentés sur le graphique à
          l&apos;aide d&apos;une liste déroulante ressençant tous les pays obtenus
          en interrogeant l&apos;API de Worldbank. Deux bouttons sont utiles
          afin de sélectionner et déselectionner directement tous les pays.
          Il est aussi possible de choisir l&apos;indicateur ou le score
          représenté par l&apos;histogramme afin d&apos;accéder
          aux données. Le survole sur une barre de l&apos;histogramme affiche le nom du pays
          et la valeur exacte pour l&apos;indicateur représenté.
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Outils utilisés
        </h2>
        <p className="section__text">
          Pour la création de cette application, nous avons fait appel à plusieurs outils qui sont :
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
                Une bibliothèque JavaScript open-source gérant l&apos;intégration de
                cartes interactives.
                {' '}
              </span>

            </li>
            <li>
              ChartJs :
              {' '}
              <span className="section_def">
                Un module de création de graphiques interactifs de façon efficace.
              </span>
            </li>

            <li>
              D3 :
              {' '}
              <span className="section_def">
                Une bibliothèque JavaScript open-source traitant les fichiers CSV
                afin de les exploiter.
              </span>
            </li>

            <li>
              Github/Git :
              {' '}
              <span className="section_def">Un outil pour la gestion de versions qui a aidé à l&apos;organisation du projet tant au niveau local qu&apos;au niveau distant.</span>
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
          Notre projet a été premièrement créé avec le module npm
          {' '}
          <strong>create-react-app</strong>
          . Ensuite, nous l&apos;avons réparti en plusieurs dossiers et sous dossiers
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
                qui regroupe toutes les images, icônes, des données JSON sur la qualité du
                transport récoltées sur Gapminder et des données GeoJSON décrivant les
                frontières des pays pour l&apos;affichage des couleurs.
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
                notre projet, par exemple : la carte, le graphique et le rapport.
                {' '}
              </span>
            </li>
          </ul>
        </p>

        <p className="section__text">
          En ce qui concerne les données adoptées, nous avons utilisé l&apos;API de World Bank
          pour récupérer les valeurs de 6 indicateurs pour tous les pays.
          Cependant, n&apos;ayant pas trouvé un indicateur adéquat sur la
          {' '}
          <strong>qualité des transports</strong>
          , nous avons opté cette fois-ci pour Gapminder, où nous avons trouvé
          les données en CSV que nous avons converti via la bibliothèque D3 afin
          d&apos;obtenir un tableau de données exploitables..
        </p>
      </div>

      <div className="Article__section">
        <h2 className="section__title">
          Conclusion
        </h2>

        <p className="section__text">
          Ce projet permet d&apos;avoir une vision globale sur des indicateurs qui ne
          sont pas forcément mis en valeur lorsque des comparaisons entre pays sont réalisées.
          Le choix pour l&apos;utilisateur dans l&apos;ordre d&apos;importance des indicateurs
          montre que des pays favorisés par certains indicateurs économiques se retrouvent moins
          avantagés dès lors que des changements d&apos;indicateurs s&apos;opèrent.
          <br />
          Cela nous a aussi permis de nous familiarisé avec des techniques de visualisation
          de données tout en ayant un objectif précis en tête.
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
