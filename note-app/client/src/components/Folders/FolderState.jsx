import { createSlice } from '@reduxjs/toolkit';

const mockFolders = [
  {
    id: 'folder-1',
    name: 'Folder 1',
  },
  {
    id: 'folder-2',
    name: 'Folder 2',
  },
  {
    id: 'folder-3',
    name: 'Folder 3',
  },
  {
    id: 'folder-4',
    name: 'Folder 4',
  },
];

export const foldersSlice = createSlice({
  name: 'folders',
  initialState: {
    data: mockFolders,
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
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

export const { addFolder, isLoading, errorMessage } = foldersSlice.actions;

export const selectFolders = (state) => state.folders;
