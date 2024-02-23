import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Note App</h1>
      {/* Login info */}
      <Outlet />
    </div>
  );
}

export default Home;