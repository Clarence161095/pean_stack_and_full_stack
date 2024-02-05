import { getAnnouncement, createAnnouncement } from '../../../../services/AnnouncementService';
import { error, loadedData, loadingData } from './action';

async function refreshData(dispatch) {
  dispatch(loadingData());
  try {
    const data = await getAnnouncement();
    dispatch(loadedData(data));
  } catch ({ message }) {
    dispatch({ type: 'announcement/error', payload: message });
  }
}

export function getAnnouncementData() {
  return refreshData;
}

export function createAnnouncementData([data, closeModelCb]) {
  return async (dispatch) => {
    dispatch(loadingData());
    try {
      const newData = await createAnnouncement({ ...data, isRead: false });
      if (newData.title === data.title) {
        dispatch(refreshData);
        closeModelCb();
      }
    } catch ({ message }) {
      dispatch(error(message));
    }
  };
}
