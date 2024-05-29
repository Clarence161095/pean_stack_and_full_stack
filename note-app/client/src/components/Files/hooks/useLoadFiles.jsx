import { useEffect } from 'react';
import { get } from '../../../configs/api';
import { isLoading, loadData } from '../FilesState';
import { useDispatch } from 'react-redux';

export const useLoadFiles = (folderId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    get(`/api/files/${folderId}`)
      .then((data) => {
        if (data) {
          dispatch(loadData(data.files));
        }
        dispatch(isLoading(false));
      })
      .catch(() => {
        dispatch(isLoading(false));
        dispatch(loadData([]));
      });
  }, [dispatch, folderId]);
};
