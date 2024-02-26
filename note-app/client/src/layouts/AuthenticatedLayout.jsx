import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';
import useAuthenticated from '../hooks/useAuthenticated';

export default function AuthenticatedLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useAuthenticated(setIsLoading);

  if (!isLoading) {
    return <Outlet />;
  }

  return <Loading />;
}
