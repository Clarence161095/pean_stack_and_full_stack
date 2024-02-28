import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <section className="flex-1 bg-gray-200 p-4">
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
