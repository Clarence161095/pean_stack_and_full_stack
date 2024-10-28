import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [userInfo, isLoading] = useAuth();

  const isLogin = () => {
    return userInfo !== null;
  };

  return <AuthContext.Provider value={{ isLogin, userInfo, isLoading } as any}>{children}</AuthContext.Provider>;
};
