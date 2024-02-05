import { configureStore } from '@reduxjs/toolkit';
import { graphSlice } from './pages/home/graph/+state/reducer';
import { announcementSlice } from './pages/home/announcement/+state/reducer';

export const store = configureStore({
  reducer: {
    graph: graphSlice.reducer,
    announcement: announcementSlice.reducer,
  },
});
