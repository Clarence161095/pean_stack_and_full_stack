import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../pages/home/graph/+store/reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})
