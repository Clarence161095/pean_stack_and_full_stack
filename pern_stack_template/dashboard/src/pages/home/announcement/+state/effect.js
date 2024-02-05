import { getAnnouncement, createAnnouncement } from '../../../../services/AnnouncementService';
import { loadedData, loadingData } from './action';
async function refeshData(dispatch) {
  dispatch(loadingData());
  try {
    const data = await getAnnouncement();
    dispatch(loadedData(data));
  } catch (error) {
    dispatch({ type: 'announcement/error', payload: 'Loi Fetching Data' });
  }
}

export function getAnnouncementData() {
  return refeshData;
}

export function createAnnouncementData({ title, content, author, date }) {
  return async (dispatch) => {
    try {
      const newData = await createAnnouncement({ title, content, author, date });
      if (newData.title === title) {
        dispatch(refeshData());
      }
    } catch (error) {
      dispatch({ type: 'announcement/error', payload: 'Loi Fetching Data' });
    }
  };
}
