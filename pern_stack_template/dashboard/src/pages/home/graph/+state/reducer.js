import { createSlice } from '@reduxjs/toolkit';

export const graphSlice = createSlice({
  name: 'graph',
  initialState: {
    isLoading: false,
    errorMessage: '',
    data: [],
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    success: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    noRefresh: (state) => {
      state.isLoading = false;
    },
  },
})

export default graphSlice;
