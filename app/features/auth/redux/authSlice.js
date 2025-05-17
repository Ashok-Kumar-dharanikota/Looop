import {createSlice} from '@reduxjs/toolkit';
import retrieveAll from './AuthThunk';

const initialState = {
  auth: {
    username: null,
    email: null,
    userToken: null,
  },
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.auth.username = action.payload;
    },
    updateEmail: (state, action) => {
      state.auth.email = action.payload;
    },
    updateUserToken: (state, action) => {
      state.auth.userToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(retrieveAll.pending, state => {
        state.loading = true;
      })
      .addCase(retrieveAll.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
        console.log(JSON.stringify(state.auth));
      });
  },
});

export default authSlice.reducer;
