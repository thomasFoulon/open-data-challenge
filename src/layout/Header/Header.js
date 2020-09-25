import React, { useState } from 'react';

import HeaderNav from '../../components/HeaderNav/HeaderNav';

import Logo from '../../components/Logo/Logo';
import { sections } from '../../utils/constants';
import './Header.css';

function Header() {
  const [currentSection, setCurrentSection] = useState(sections.MAP);

  return (
    <div className="Header">
      <Logo />
      <HeaderNav
        section={currentSection}
        onSectionChange={(section) => setCurrentSection(section)}
      />

    </div>
  );
}

export default Header;
