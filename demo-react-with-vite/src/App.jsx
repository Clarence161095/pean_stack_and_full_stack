import { useState } from 'react';
import './App.scss';
import ThemeContext from './ThemeContext';
import Navigator from './components/Navigator';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navigator />
        <Home />
      </ThemeContext.Provider>
    </>
  )
}

export default App
