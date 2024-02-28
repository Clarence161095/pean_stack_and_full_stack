import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUserContext } from '../../layouts/RootLayout';
import { getUserInfo } from '../../services/login';

const useAuthenticated = () => {
  const { loginUser, setLoginUser, setIsLoading } = useContext(LoginUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getUserInfo()
      .then((data) => {
        if (data.loginUser.id) {
          setLoginUser(data.loginUser);
        } else {
          setLoginUser({});
          navigate('/login');
        }
        setIsLoading(false);
      })
      .catch(() => {
        setLoginUser({});
        setIsLoading(false);
        navigate('/login');
      });

    return () => {
      setIsLoading(false);
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
