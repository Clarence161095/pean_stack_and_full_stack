
import { useDispatch, useSelector } from 'react-redux';
import { create, get } from './effect';
import { selectData, selectError, selectLoading } from './selector';
import { useEffect } from 'react';
import { getLastUpdated } from '../../../../services/GraphService';
import { noRefresh } from './action';

let isConstructor = true;

export default function useFacade() {
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isConstructor) {
      isConstructor = false;
      console.log(`Graph useFacade constructor`)
      dispatch(get())
    }

    getLastUpdated().then((lastUpdated) => {
      if (lastUpdated.lastUpdated === localStorage.getItem('lastUpdated')) {
        console.log('No need to refresh data');
        dispatch(noRefresh());
        return;
      }
      localStorage.setItem('lastUpdated', lastUpdated.lastUpdated);
      dispatch(get())
    })
    console.log(`Graph useFacade onInit`)

  }, [dispatch]);

  return {
    isLoading,
    errorMessage,
    list: data,
    loadData: () => dispatch(get()),
    addData: (title) => dispatch(create({ title })),
  };
}
