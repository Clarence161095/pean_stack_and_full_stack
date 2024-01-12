
import MenuContextProvider from '../contexts/MenuContext';
import AnnouncementEffect from '../pages/home/announcement/+store/effect';
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
          <AnnouncementEffect>
            <Content />
          </AnnouncementEffect>
        </section>
      </div>
    </MenuContextProvider>
  )
}
