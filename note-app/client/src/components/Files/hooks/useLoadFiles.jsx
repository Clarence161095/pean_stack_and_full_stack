import { useEffect } from 'react';
import { get } from '../../../configs/api';
import { setLoading, loadData } from '../FilesState';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useLoadFiles = () => {
  const { folderId, noteId } = useParams();

  const dispatch = useDispatch();

  const loadFiles = () => {
    dispatch(setLoading(true));
    get(`/api/files/${folderId}`)
      .then((data) => {
        if (data) {
          dispatch(loadData(data.files));
        }
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(loadData([]));
      });
  };

  useEffect(loadFiles, [dispatch, folderId, noteId]);

  return loadFiles;
};
