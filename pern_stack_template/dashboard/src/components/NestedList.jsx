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
  // TODO: How to active menu follow corresponding route
  const navigate = useNavigate();

  const handleClick = (menu) => {
    menu.childrenIsOpen = !menu.childrenIsOpen
    navigate(menu.route);
    setMenu([...menus])
  };

  const renderMenu = (menus) => {
    return menus.map(menu => {
      if (!menu.children) {
        return (
          <Fragment key={menu.title}>
            <ListItemButton sx={{ pl: menu.level * 2 }} onClick={() => handleClick(menu)}>
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
            <ListItemButton onClick={() => handleClick(menu)} sx={{ pl: menu.level * 2 }}>
              <ListItemIcon>
                {menu.icon && menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
              {menu.childrenIsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={menu.childrenIsOpen} timeout="auto" unmountOnExit>
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