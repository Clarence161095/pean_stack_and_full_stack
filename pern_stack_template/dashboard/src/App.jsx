import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './routes/routes';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}

export default App
