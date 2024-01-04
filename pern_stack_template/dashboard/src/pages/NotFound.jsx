import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function NotFound() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark() ? 'bg-gray-800' : 'bg-gray-50'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark() ? 'text-white' : 'text-gray-900'}`}>
            404 - Page Not Found
          </h2>
        </div>
        <div>
          <p className={`mt-2 text-center text-sm ${isDark() ? 'text-gray-300' : 'text-gray-600'}`}>
            The page you are looking for does not exist. It might have been moved or deleted.
          </p>
        </div>
        <div>
          <Link to="/" className="mt-5 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
