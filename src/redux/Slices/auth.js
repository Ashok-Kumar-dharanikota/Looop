import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const setAuth = createAsyncThunk('auth/setAuth', async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      fingerprint: true,
    };
  } catch (error) {
    return {
      fingerprint: false,
    };
  }
});

const initialState = {
  auth: {
    fingerprint: false,
  },
  loading: true,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateFingerprintAuth: (state, action) => {
      state.auth.fingerprint = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setAuth.pending, state => {
        state.loading = true;
        console.log('setAuth pending');
      })
      .addCase(setAuth.fulfilled, (state, action) => {
        state.auth.fingerprint = action.payload.fingerprint;
        console.log('setAuth fulfilled');
      });
  },
});

export const {updateFingerprintAuth} = auth.actions;

export default auth.reducer;
