import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const LoginUserContext = createContext({});

const RootLayout = () => {
  const [loginUser, setLoginUser] = useState({});

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      <Outlet />
    </LoginUserContext.Provider>
  );
};

export default RootLayout;
