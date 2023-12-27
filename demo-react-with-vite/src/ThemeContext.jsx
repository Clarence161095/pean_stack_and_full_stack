import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', // Add your initial values here
  toggleTheme: () => {}, // Add your initial functions here
});

export default ThemeContext;