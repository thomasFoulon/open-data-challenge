import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { themes } from '../../Utils/constants';

const ToggleTheme = ({ onThemeChanged, theme }) => (
  <DarkModeToggle
    onChange={(isDark) => {
      if (isDark) onThemeChanged(themes.DARK);
      else onThemeChanged(themes.LIGHT);
    }}
    checked={theme === themes.DARK}
    size={64}
  />
);

export default ToggleTheme;
