import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    email: null,
    currency: null,
    category: null,
    expenses: null,
  },
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.user.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload;
    },
    updateCurrency: (state, action) => {
      state.user.currency = action.payload;
    },
    updateCategory: (state, action) => {
      state.user.category = action.payload;
    },
    updateExpenses: (state, action) => {
      state.user.expenses = action.payload;
    },
  },
});

export const {
  updateCategory,
  updateCurrency,
  updateEmail,
  updateExpenses,
  updateName,
} = userSlice.actions;

export default userSlice.reducer;
