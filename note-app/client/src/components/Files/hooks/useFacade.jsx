import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectFiles } from '../FilesState';
import { useLoadFiles } from './useLoadFiles';

export const useFacade = () => {
  const { folderId, noteId } = useParams();
  const { data, errorMessage } = useSelector(selectFiles);
  useLoadFiles(folderId);
  const navigate = useNavigate();

  return {
    files: data,
    folderName: 'Folder 1',
    noteId,
    folderId,
    newFile: () => {},
    errorMessage,
    navigate,
  };
};
