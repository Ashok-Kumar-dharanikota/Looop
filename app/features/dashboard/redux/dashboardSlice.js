import {createSlice} from '@reduxjs/toolkit';
import fetchCurrentWeekExpenses from './fetchCurrentWeekExpenses';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentWeekExpenses.pending, state => {
        state.loading = true;
        state.error = null;
        console.log('Fetching weekly expenses...');
      })
      .addCase(fetchCurrentWeekExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log('Weekly expenses fetched:', action.payload);
      })
      .addCase(fetchCurrentWeekExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error('Error fetching weekly expenses:', action.error.message);
      });
  },
});

export default dashboardSlice.reducer;
