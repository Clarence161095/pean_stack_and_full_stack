import { useContext } from 'react';
import lightClasses from './Navigator.module.scss'
import darkClasses from './NavigatorDark.module.scss'
import ThemeContext from '../ThemeContext';

const Navigator = () => {
  const { theme } = useContext(ThemeContext);

  const classes = theme === 'dark' ? darkClasses : lightClasses

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>Logo</div>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <a className={classes.link} href="#">Link</a>
        </li>
        {/*...*/}
      </ul>
    </nav>
  );
};

export default Navigator;
