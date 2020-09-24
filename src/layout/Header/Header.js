import React, { useState } from 'react';

import HeaderNav from '../../components/HeaderNav/HeaderNav';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';

import Logo from '../../components/Logo/Logo';
import { sections } from '../../Utils/constants';
import './Header.css';

function Header({ onThemeChanged, theme }) {
  const [currentSection, setCurrentSection] = useState(sections.MAP);

  return (
    <div className="Header">
      <Logo />
      <HeaderNav
        section={currentSection}
        onSectionChange={(section) => setCurrentSection(section)}
      />
      <ToggleTheme
        theme={theme}
        onThemeChanged={(themeData) => {
          onThemeChanged(themeData);
        }}
      />
    </div>
  );
}

export default Header;
