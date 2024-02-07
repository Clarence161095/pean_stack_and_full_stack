import { createSlice } from '@reduxjs/toolkit';

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState: {
    loadingData: false,
    errorMessenger: '',
    validateInput: '',
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
    validateInput: (state, action) => {
      state.loadingData = false;
      state.validateInput = action.payload;
    },
  },
});
export default announcementSlice;
