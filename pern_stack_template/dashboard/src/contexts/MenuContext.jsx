/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../routes/Menu';

export const MenuContext = createContext([]);

function updateMenu(menu, path) {
  return menu.map(item => {
    if (item.path === path) {
      return { ...item, isActive: true };
    } else if (item.children) {
      const children = updateMenu(item.children, path);
      const isActive = children.some(child => child.isActive);
      return { ...item, children, isOpenChildren: isActive, isActive: isActive };
    }
    return { ...item, isActive: false };
  });
}

export default function MenuContextProvider({ children }) {
  const [changeRoute, setChangeRoute] = useState(false);
  const refMenu = useRef(Menu)
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    refMenu.current = updateMenu(refMenu.current, currentPath);
    setChangeRoute(!changeRoute)
  }, [location]);

  function setMenu(menu) {
    refMenu.current = menu;
    setChangeRoute(!changeRoute)
  }

  return (
    <MenuContext.Provider value={{ menu: refMenu.current, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
