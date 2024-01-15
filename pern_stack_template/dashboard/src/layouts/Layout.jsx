import MenuContextProvider from '../contexts/MenuContext';
import StoreContextProvider from '../contexts/StoreContext';
import Content from "./Content";
import Header from "./Header";
import Navigator from "./Navigator";

export default function Layout() {
  return (
    <MenuContextProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <section className="flex h-full">
          <Navigator />
          <StoreContextProvider >
            <Content />
          </StoreContextProvider>
        </section>
      </div>
    </MenuContextProvider>
  )
}
