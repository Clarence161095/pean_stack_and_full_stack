import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LoginUserContext } from '../../../layouts/RootLayout';
import { selectFolders } from '../FolderState';

const useLoading = () => {
  const { setIsLoading } = useContext(LoginUserContext);
  const { isLoading } = useSelector(selectFolders);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, setIsLoading]);
};

export default useLoading;
