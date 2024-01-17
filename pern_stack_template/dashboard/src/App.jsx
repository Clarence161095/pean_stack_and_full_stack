import { RouterProvider } from 'react-router-dom';
import './App.scss';
import ThemeContextProvider from './contexts/ThemeContext';
import router from './routes/routes';

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}

export default App
