import React from "react";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUser] = useState(null);

  const login = (info) => {
    localStorage.setItem("user", JSON.stringify(info));
    setUser(info);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isLogin = () => {
    if (userInfo && userInfo.display_name && userInfo.email) {
      return true;
    } else {
      const info = JSON.parse(localStorage.getItem("user"));
      if (info && info.display_name && info.email) {
        return true;
      } else {
        return false;
      }
    }
  };

  return <AuthContext.Provider value={{ login, logout, isLogin }}>{children}</AuthContext.Provider>;
};
