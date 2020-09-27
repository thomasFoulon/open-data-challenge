import React from 'react';
import Author from '../../components/Author/Author';

import amine from '../../assets/amine-elmouradi.jpg';
import imane from '../../assets/imane-el-mouradi.png';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar-container">
        <div className="Sidebar__header">Réalisé par</div>

        <div className="Sidebar__content">
          <div className="Sidebar__authors">
            <Author
              src={amine}
              name="Amine ELMOURADI"
              twitter="https://twitter.com/ElmouradiAmine"
              linkedin="https://www.linkedin.com/in/elmouradi-amine-599702183/"
              facebook="https://www.facebook.com/profile.php?id=100010477530830"
            />
            <Author
              src={imane}
              name="Imane EL MOURADI"
              linkedin="https://www.linkedin.com/in/imane-el-mouradi-a3a554165/"
              github="https://github.com/Phedri"
            />
            <Author name="Thomas FOULON" />
            <Author name="Anne GAISNE" />
          </div>
        </div>
      </div>

      <div className="Sidebar-container">
        <div className="Sidebar__header">Encadré par</div>

        <div className="Sidebar__content">
          <div className="Sidebar__authors">
            <Author name="Renaud Blanch" isTeacher />
            <Author name="Sylvain Bouveret" isTeacher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
