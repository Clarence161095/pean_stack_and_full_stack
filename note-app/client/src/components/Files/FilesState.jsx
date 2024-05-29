import { createSlice } from '@reduxjs/toolkit';

export const fileSlice = createSlice({
  name: 'files',
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
    },
    addFile: (state, action) => {
      state.data.push(action.payload);
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    errorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { addFile, loadData, isLoading, errorMessage } = fileSlice.actions;

export const selectFiles = (state) => state.files;
