import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { post } from '../../../configs/api';
import { selectFiles, setErrorMessage } from '../FilesState';
import { useLoadFiles } from './useLoadFiles';

export const useFacade = () => {
  const { folderId, noteId } = useParams();
  const { data, errorMessage } = useSelector(selectFiles);
  const dispatch = useDispatch();
  const loadFiles = useLoadFiles();
  const navigate = useNavigate();

  const handleNewFile = (folderId) => {
    post('/api/new-file', { folderId }).then((res) => {
      if (res.data) {
        loadFiles();
        const newFile = res.data;
        navigate(`/${folderId}/${newFile.id}`);
      } else {
        dispatch(setErrorMessage(res.errorMessage || 'Add file failed'));
      }
    });
  };

  return {
    files: data,
    folderName: 'Folder 1',
    noteId,
    folderId,
    newFile: handleNewFile,
    errorMessage,
    navigate,
  };
};
