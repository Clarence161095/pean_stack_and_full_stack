import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createContext, useState } from 'react';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const INIT_THEME = darkTheme
export const ThemeContext = createContext(INIT_THEME);

const theme = {
  'dark': {
    name: 'Dark Mode',
    mode: darkTheme
  },
  'light': {
    name: 'Light Mode',
    mode: lightTheme
  }
}

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('dark')

  function switchMode() {
    setMode(isDark() ? 'light' : 'dark')
  }

  function getModeName() {
    return theme[mode].name
  }

  function isDark() {
    return mode === 'dark'
  }

  return (
    <ThemeContext.Provider value={{ mode, isDark, getModeName, switchMode, setMode }}>
      <ThemeProvider theme={theme[mode].mode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>

  )
}

export default ThemeContextProvider
