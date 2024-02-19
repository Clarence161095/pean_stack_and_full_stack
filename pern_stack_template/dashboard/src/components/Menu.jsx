import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import NestedMenu from './NestedList';

export default function Menu() {
  const { menu, setMenu } = useContext(MenuContext);

  return <NestedMenu menus={menu} setMenu={setMenu} />;
}
