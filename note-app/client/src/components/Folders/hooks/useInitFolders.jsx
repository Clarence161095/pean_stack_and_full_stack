import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from '../../../configs/api';

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
      type: 'folders/initData',
      payload: data,
    });
  };
};

const useInitFolders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFolders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInitFolders;
