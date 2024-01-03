import { useState } from 'react';
import NestedList from "./NestedList";

const INIT_MENU = []

export default function Menu({inputMenu = INIT_MENU}) {
  const [menu, setMenu] = useState(inputMenu);
  return (
    <>
      <NestedList menus={menu} setMenu={setMenu}/>
    </>
  )
}
