import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../configs/api';
import { addFolder } from '../FolderState';

const useAddFolder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddFolder = (folderName) => {
    if (folderName) {
      post('/api/folders', { name: folderName }).then((res) => {
        if (res.data) {
          const folder = res.data;
          dispatch(addFolder(folder));
          dispatch({
            type: 'folders/errorMessage',
            payload: '',
          });
          return navigate(`/${folder.id}`);
        } else {
          dispatch({
            type: 'folders/errorMessage',
            payload: res.errorMessage || 'Add folder failed',
          });
        }
      });
    } else {
      dispatch({
        type: 'folders/errorMessage',
        payload: 'Folder name is required',
      });
      return false;
    }
  };

  return {
    handleAddFolder,
    navigate,
  };
};

export default useAddFolder;
