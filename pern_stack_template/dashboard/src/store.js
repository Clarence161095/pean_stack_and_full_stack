import { configureStore } from '@reduxjs/toolkit'
import { graphSlice } from './pages/home/graph/+state/reducer';

export const store = configureStore({
  reducer: {
    graph: graphSlice.reducer,
  }
})

