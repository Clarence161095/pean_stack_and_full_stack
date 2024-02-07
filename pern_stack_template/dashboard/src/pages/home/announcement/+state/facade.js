import { useSelector, useDispatch } from 'react-redux';
import {
  selectLoading,
  selectErrorMessenger,
  selectLoadSuccess,
  selectValidateInput,
} from './selector';
import { getAnnouncementData, createAnnouncementData } from './effect';
import { useEffect } from 'react';

let isInitial = true;
export default function useFacade() {
  const listData = useSelector(selectLoadSuccess);
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessenger);
  const validateInput = useSelector(selectValidateInput);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      dispatch(getAnnouncementData());
    }
  }, [dispatch]);
  return {
    list: listData,
    isLoading,
    errorMessage,
    validateInput,
    post: (input) => dispatch(createAnnouncementData(input)),
  };
}
