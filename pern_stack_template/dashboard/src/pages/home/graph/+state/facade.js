
import { useDispatch, useSelector } from 'react-redux';
import { create, get } from './effect';
import { selectData, selectError, selectLoading } from './selector';
import { useEffect } from 'react';

let isInitial = true;

export default function useFacade() {
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(get())
    }
  }, [dispatch]);

  return {
    isLoading,
    errorMessage,
    list: data,
    loadData: () => dispatch(get()),
    addData: (title) => dispatch(create({ title })),
  };
}
