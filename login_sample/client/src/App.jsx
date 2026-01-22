import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

export function checkIsAuth() {
  // Mock in actual app this will be check with jwt...
  const user = localStorage.getItem('user');
  if (user.role === 'admin') {
    return true;
  }
  return false;
}

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (checkIsAuth()) {
      setIsAuth(true);
    }
  }, []);


  const routes = [
    { path: '/login', element: <Login setIsAuth={setIsAuth} /> },
    {
      path: '/protected',
      element: (
        <ProtectedRoute isAuth={isAuth}>
          <div>Protected Content</div>
        </ProtectedRoute>
      ),
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
