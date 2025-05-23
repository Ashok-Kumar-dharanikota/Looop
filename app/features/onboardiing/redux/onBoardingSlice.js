import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  onboarding: {
    currencyPicked: null,
    FirstRecord: null,
    notificationsEnabled: null,
    completed: false,
  },
  loading: true,
};

const onBoardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateCurrencyPick: (state, action) => {
      state.onboarding.currencyPicked = action.payload;
    },
    updateFirstRecord: (state, action) => {
      state.onboarding.FirstRecord = action.payload;
    },
    updateNotificationsEnabled: (state, action) => {
      state.onboarding.notificationsEnabled = action.payload;
    },
    onBoardCompletd: (state, action) => {
      state.onboarding.completed = action.payload;
    },
  },
});

export const {
  updateCurrencyPick,
  updateFirstRecord,
  updateNotificationsEnabled,
  onBoardCompletd,
} = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
