import { useContext, useEffect } from 'react';
import { LoginUserContext } from '../layouts/RootLayout';
import { getUserInfo } from '../services/login';
import { useNavigate } from 'react-router-dom';

const useAuthenticated = (setLoading) => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserInfo()
      .then((data) => {
        if (data.loginUser.id) {
          setLoginUser(data.loginUser);
        } else {
          setLoginUser({});
          navigate('/login');
        }
        setLoading(false);
      })
      .catch(() => {
        setLoginUser({});
        setLoading(false);
        navigate('/login');
      });

    return () => {
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loginUser && loginUser.id !== undefined) {
    return {
      isLogin: !!loginUser.id || false,
      loginUser,
    };
  }

  return {};
};

export default useAuthenticated;
