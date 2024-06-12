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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { loadData, addFile, setLoading, setErrorMessage } = fileSlice.actions;

export const selectFiles = (state) => state.files;
