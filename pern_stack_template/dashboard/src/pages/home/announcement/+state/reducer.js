import { createSlice } from '@reduxjs/toolkit';

export const announcementSlice = createSlice({
  // TODO: Tách state theo từng chức năng
  name: 'announcement',
  initialState: {
    loadingData: false,
    addDataLoading: false,
    errorMessenger: '',
    data: [],
  },
  reducers: {
    loadingData: (state) => {
      state.loadingData = true;
    },
    loadedData: (state, action) => {
      state.loadingData = false;
      state.data = action.payload;
    },
    error: (state, action) => {
      state.loadingData = false;
      state.errorMessenger = action.payload;
    },
  },
});
export default announcementSlice;
