import { configureStore } from '@reduxjs/toolkit';
import { foldersSlice } from './components/Folders/FolderState';

export const store = configureStore({
  reducer: {
    folders: foldersSlice.reducer,
  },
});
