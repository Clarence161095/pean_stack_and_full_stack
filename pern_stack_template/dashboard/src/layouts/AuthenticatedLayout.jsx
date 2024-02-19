import { useState } from 'react';
import Loading from '../components/Loading';
import Content from './Content';
import Header from './Header';
import Navigator from './Navigator';
import MenuContextProvider from '../contexts/MenuContext';
import useAuthenticated from '../hooks/useAuthenticated';

export default function AuthenticatedLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useAuthenticated(setIsLoading);

  if (!isLoading) {
    return (
      <MenuContextProvider>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <section className="flex h-full">
            <Navigator />
            <Content />
          </section>
        </div>
      </MenuContextProvider>
    );
  }

  return <Loading />;
}
