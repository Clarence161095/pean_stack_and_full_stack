import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './configs/router';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
