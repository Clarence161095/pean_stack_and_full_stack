import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';
import { store } from '../store';

export const LoginUserContext = createContext({});

const RootLayout = () => {
  const [loginUser, setLoginUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Provider store={store}>
      <LoginUserContext.Provider value={{ loginUser, setLoginUser, isLoading, setIsLoading }}>
        <Outlet />
        {isLoading && <Loading />}
      </LoginUserContext.Provider>
    </Provider>
  );
};

export default RootLayout;
