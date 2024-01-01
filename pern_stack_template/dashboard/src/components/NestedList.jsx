import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';

export default function NestedList({
  header = '',
  menus = []
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = (menu) => {
    setOpen(!open);
    menu.childrenIsOpen = !menu.childrenIsOpen
    console.log(menu);
    // TODO
  };

  const renderMenu = (menu) => {
    if (!menu.children) {
      return <ListItemButton sx={{ pl: menu.level * 2 }}>
        <ListItemIcon>
          {menu.icon && menu.icon}
        </ListItemIcon>
        <ListItemText primary={menu.title} />
      </ListItemButton>
    } else {
      return <>
        <ListItemButton onClick={() => handleClick(menu)} sx={{ pl: menu.level * 2 }}>
          <ListItemIcon>
            {menu.icon && menu.icon}
          </ListItemIcon>
          <ListItemText primary={menu.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menu.children.map(m => renderMenu(m))}
          </List>
        </Collapse>
      </>
    }
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
        menus.map(menu => renderMenu(menu))
      }
    </List>
  );
}