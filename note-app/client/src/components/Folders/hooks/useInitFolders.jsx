import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { get } from '../../../configs/api';
import useFacade from './useFacade';

const getFolders = () => {
  return async (dispatch) => {
    dispatch({
      type: 'folders/isLoading',
      payload: true,
    });
    const data = await get('/api/folders');
    dispatch({
      type: 'folders/isLoading',
      payload: false,
    });
    dispatch({
      type: 'folders/loadData',
      payload: data,
    });
  };
};

const useInitFolders = ({ addFolderModalRef }) => {
  const { folderId } = useFacade();
  const curFolderId = useRef(folderId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (curFolderId.current !== folderId) {
      curFolderId.current = folderId;
      addFolderModalRef.current.close();
    }
  }, [addFolderModalRef, folderId]);

  useEffect(() => {
    dispatch(getFolders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInitFolders;
