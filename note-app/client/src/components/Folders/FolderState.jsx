import { createSlice } from '@reduxjs/toolkit';

export const foldersSlice = createSlice({
  name: 'folders',
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    initFolders: (state, action) => {
      state.data = action.payload;
    },
    addFolder: (state, action) => {
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

export const { addFolder, initFolders, isLoading, errorMessage } = foldersSlice.actions;

export const selectFolders = (state) => state.folders;
