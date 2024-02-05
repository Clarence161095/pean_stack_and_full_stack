import { createSlice } from '@reduxjs/toolkit';

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState: {
    loadingData: false,
    errorMessenger: '',
    validateData: 'không được bỏ trống trường này',
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
    validate: (state) => {
      state.validateData = 'không được bỏ tr này';
    },
  },
});
export default announcementSlice;
