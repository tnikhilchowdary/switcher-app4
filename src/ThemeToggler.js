import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', marginTop: '20px' }}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
