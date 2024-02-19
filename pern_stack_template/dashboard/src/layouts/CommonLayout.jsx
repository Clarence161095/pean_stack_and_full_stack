import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';

export const LoginUserContext = createContext({});

const CommonLayout = () => {
  const [loginUser, setLoginUser] = useState({});

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      <Outlet />
    </LoginUserContext.Provider>
  );
};

export default CommonLayout;
