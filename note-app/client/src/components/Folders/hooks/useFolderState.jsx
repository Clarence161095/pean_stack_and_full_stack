import { useDispatch, useSelector } from 'react-redux';
import { selectFolders } from '../FolderState';

export const useFolderState = () => {
  const { data, errorMessage } = useSelector(selectFolders);
  const dispatch = useDispatch();

  return {
    data,
    errorMessage,
    setErrorMessages: (msg) => {
      dispatch({
        type: 'folders/errorMessage',
        payload: msg,
      });
    },
  };
};

export default useFolderState;
