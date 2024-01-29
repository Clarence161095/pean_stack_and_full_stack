import { useDispatch, useSelector } from 'react-redux';
import useConstructor from '../../../../hooks/useConstructor';
import useInit from '../../../../hooks/useInit';
import { getLastUpdated } from '../../../../services/GraphService';
import { noRefresh } from './action';
import { create, get } from './effect';
import { selectData, selectError, selectLoading } from './selector';

export default function useFacade() {
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useConstructor(() => {
    dispatch(get())
    console.log(`Graph useFacade onConstructor`)
  }, 'Graph')

  useInit(() => {
    getLastUpdated().then((lastUpdated) => {
      if (lastUpdated.lastUpdated === localStorage.getItem('lastUpdated')) {
        dispatch(noRefresh());
        return;
      }
      localStorage.setItem('lastUpdated', lastUpdated.lastUpdated);
      dispatch(get())
    })
    console.log(`Graph useFacade onInit`)
  })

  return {
    isLoading,
    errorMessage,
    list: data,
    loadData: () => dispatch(get()),
    addData: (title) => dispatch(create({ title })),
  };
}
