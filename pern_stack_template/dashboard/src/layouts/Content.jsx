
import { Outlet } from 'react-router-dom';

export default function Content() {
  return (
    <main className="h-full w-full">
      <Outlet />
    </main>
  )
}
