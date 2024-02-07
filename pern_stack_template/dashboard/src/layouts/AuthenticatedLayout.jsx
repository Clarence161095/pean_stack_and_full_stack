import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuContextProvider from '../contexts/MenuContext';
import Content from './Content';
import Header from './Header';
import Navigator from './Navigator';
import { getAuth } from 'firebase/auth';

export default function AuthenticatedLayout() {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unSub = auth.onIdTokenChanged(async (user) => {
      if (user) {
        return;
      }
      navigate('/login');
    });

    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

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
