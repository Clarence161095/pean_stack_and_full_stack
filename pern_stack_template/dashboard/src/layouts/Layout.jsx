
import MenuContextProvider from '../contexts/MenuContext';
import Content from "./Content";
import Header from "./Header";
import Navigator from "./Navigator";

export default function Layout() {
  return (
    <MenuContextProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <section className="flex h-full">
          <Navigator />
          <Content />
        </section>
      </div>
    </MenuContextProvider>
  )
}
