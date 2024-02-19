import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LoginUserContext } from './CommonLayout';

export default function Header() {
  const { isDark, switchMode, getModeName } = useContext(ThemeContext);
  const { loginUser } = useContext(LoginUserContext);

  return (
    <header className="flex items-center h-[50px]">
      <FormControlLabel
        control={<Switch checked={isDark()} onChange={switchMode} name={getModeName()} />}
        label={getModeName()}
      />
      <div className="flex-grow" />
      <p>{loginUser?.email}</p>
      <button type="button" className="ml-4">
        Logout
      </button>
    </header>
  );
}
