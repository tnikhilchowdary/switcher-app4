import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggler from './ThemeToggler';

function App() {
  const { theme } = useContext(ThemeContext);

  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    textAlign: 'center',
    paddingTop: '100px',
  };

  return (
    <div style={style}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeToggler />
    </div>
  );
}

export default App;
