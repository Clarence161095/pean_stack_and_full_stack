import { configureStore } from '@reduxjs/toolkit';
import { folderSlice } from './components/Folders/FolderState';
import { fileSlice } from './components/Files/FilesState';

export const store = configureStore({
  reducer: {
    folders: folderSlice.reducer,
    files: fileSlice.reducer,
  },
});
