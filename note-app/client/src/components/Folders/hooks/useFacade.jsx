import { useParams } from 'react-router-dom';
import useLoading from './useLoading';
import useAddFolder from './useAddFolder';
import useFolderState from './useFolderState';

const useFacade = () => {
  const { folderId } = useParams();
  const { handleAddFolder, navigate } = useAddFolder();
  const { data, errorMessage, setErrorMessages } = useFolderState();
  useLoading();

  return {
    folderId: data.find((folder) => folder.id === folderId) ? folderId : data[0]?.id || '',
    listFolder: data,
    addFolder: handleAddFolder,
    navigate,
    errorMessage,
    setErrorMessages,
  };
};

export default useFacade;
