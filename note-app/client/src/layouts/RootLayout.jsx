import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';

export const LoginUserContext = createContext({});

const RootLayout = () => {
  const [loginUser, setLoginUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser, isLoading, setIsLoading }}>
      <Outlet />
      {isLoading && <Loading />}
    </LoginUserContext.Provider>
  );
};

export default RootLayout;
