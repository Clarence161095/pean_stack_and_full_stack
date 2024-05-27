import { useParams } from 'react-router-dom';
import useAddFolder from './useAddFolder';
import useFolderState from './useFolderState';
import useLoading from './useLoading';
import { useEffect } from 'react';

const useFacade = () => {
  const { folderId } = useParams();

  const { handleAddFolder, navigate } = useAddFolder();
  const { data, errorMessage, setErrorMessages } = useFolderState();
  useLoading();

  useEffect(() => {
    if (data.length > 0) {
      const folder = data.find((folder) => folder.id === folderId);
      if (!folder) {
        navigate(`/${data[0].id}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return {
    folderId: folderId,
    listFolder: data,
    addFolder: handleAddFolder,
    navigate,
    errorMessage,
    setErrorMessages,
  };
};

export default useFacade;
