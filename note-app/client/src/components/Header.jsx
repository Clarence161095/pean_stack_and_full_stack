import { useContext } from 'react';
import useLogout from '../hooks/auth/useLogout';
import { LoginUserContext } from '../layouts/RootLayout';

function Header() {
  const { loginUser } = useContext(LoginUserContext);
  const { handleLogout } = useLogout();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Note App</h1>
        <div className="flex items-center space-x-4">
          <p>Welcome, {loginUser.displayName}</p>
          <img className="w-10 h-10 rounded-full" src={loginUser.avatar} alt="avatar" />
          <button
            className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
