
import { Outlet } from 'react-router-dom';

export default function Content() {
  return (
    <main className="h-full overflow-auto p-4 w-full">
      <Outlet />
    </main>
  )
}
