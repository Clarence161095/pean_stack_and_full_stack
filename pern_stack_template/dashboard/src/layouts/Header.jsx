import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
  const { isDark, switchMode, getModeName } = useContext(ThemeContext)

  return (
    <header className="flex items-center h-[50px]">
      <FormControlLabel
        control={
          <Switch checked={isDark()} onChange={switchMode} name={getModeName()} />
        }
        label={getModeName()}
      />
    </header>
  )
}
