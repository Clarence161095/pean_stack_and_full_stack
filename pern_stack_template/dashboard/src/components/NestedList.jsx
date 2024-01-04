import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";

export default function NestedList({
  header = '',
  menus = [],
  setMenu = () => { }
}) {
  const navigate = useNavigate();

  const handleClick = (menu) => {
    if (menu.children) {
      menu.isOpenChildren = !menu.isOpenChildren;
      setMenu(menus)
    }
    navigate(menu.path);
  };

  const renderMenu = (menus) => {
    return menus.map(menu => {
      if (!menu.children) {
        return (
          <Fragment key={menu.title}>
            <ListItemButton selected={menu.isActive} sx={{ pl: menu.level * 2 }} onClick={() => handleClick(menu)}>
              <ListItemIcon>
                {menu.icon && menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </Fragment>
        )
      } else {
        return (
          <Fragment key={menu.title}>
            <ListItemButton selected={menu.isActive} onClick={() => handleClick(menu)} sx={{ pl: menu.level * 2 }}>
              <ListItemIcon>
                {menu.icon && menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
              {menu.isOpenChildren ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={menu.isOpenChildren} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  renderMenu(menu.children)
                }
              </List>
            </Collapse>
          </Fragment>
        )
      }
    })
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        header ? <ListSubheader component="div" id="nested-list-subheader">
          {header}
        </ListSubheader> : <></>
      }
    >
      {
        renderMenu(menus)
      }
    </List>
  );
}
