import { useState } from "react";
import Menu from "../components/Menu";
import MenuContext from "../contexts/MenuContext";
import MenuList from '../routes/Menu';
import { Outlet } from "react-router-dom";


export default function Layout() {
  const [menu, setMenu] = useState(MenuList);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <div className="flex flex-col h-screen">
        <header className="flex items-center h-[50px]">
          Header
        </header>
        <section className="flex h-full">
          <nav className="flex flex-col w-fit min-w-[250px] max-w-[300px]">
            <Menu inputMenu={menu} />
          </nav>
          <main className="h-full w-full">
            <Outlet />
          </main>
        </section>
      </div>
    </MenuContext.Provider>

  )
}
