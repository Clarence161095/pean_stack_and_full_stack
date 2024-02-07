import { getAnnouncement, createAnnouncement } from '../../../../services/AnnouncementService';
import { loadedData, loadingData } from './action';
async function refeshData(dispatch) {
  dispatch(loadingData());
  try {
    const data = await getAnnouncement();
    dispatch(loadedData(data));
  } catch ({ message }) {
    dispatch({ type: 'announcement/error', payload: message });
  }
}

export function getAnnouncementData() {
  return refeshData;
}

export function createAnnouncementData({ data, closeModalCb }) {
  return async (dispatch) => {
    dispatch(loadingData());
    try {
      const newData = await createAnnouncement({ ...data, isRead: false });
      if (newData.title === data.title) {
        dispatch(refeshData);
        closeModalCb();
      }
    } catch ({ message }) {
      dispatch({ type: 'announcement/error', payload: message });
    }
  };
}

async function validateInputCheck(dispatch) {
  dispatch(loadingData());
  try {
    const data = await getAnnouncement();
    dispatch(loadedData(data));
  } catch ({ message }) {
    dispatch({ type: 'announcement/validateInput', payload: message });
  }
}

export function getValidateInputCheck() {
  return validateInputCheck;
}
