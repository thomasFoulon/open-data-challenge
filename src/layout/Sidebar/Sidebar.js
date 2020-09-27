import React from 'react';
import Author from '../../components/Author/Author';

import picture from '../../assets/amine-elmouradi.jpg';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar-container">
        <div className="Sidebar__header">
          Réalisé par
        </div>

        <div className="Sidebar__content">
          <div className="Sidebar__authors">
            <Author src={picture} name="Amine ELMOURADI" twitter="https://twitter.com/ElmouradiAmine" linkedin="https://www.linkedin.com/in/elmouradi-amine-599702183/" facebook="https://www.facebook.com/profile.php?id=100010477530830" />
            <Author name="Imane EL MOURADI" />
            <Author name="Thomas FOULON" />
            <Author name="Anne GAISNE" />
          </div>
        </div>

      </div>

      <div className="Sidebar-container">
        <div className="Sidebar__header">
          Encadré par
        </div>

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
