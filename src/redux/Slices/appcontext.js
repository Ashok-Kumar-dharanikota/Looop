import {createSlice} from '@reduxjs/toolkit';
import {
  loadAppContext,
  clearAppContext,
  saveAppContext,
} from '../AsyncThunk/AsyncThunk';
import {AsyncStore} from '../../storage/AsyncStore';

const initialState = {
  context: {
    onBoardingCompleted: false,
    userToken: null,
    newUser: true,
    notificationEnabled: false,
    authLayersetByUser: false,
    currencySetByUser: null,
  },
  loading: true,
};

const appContextSlice = createSlice({
  name: 'appcontext',
  initialState,
  extraReducers: buidler => {
    buidler
      .addCase(loadAppContext.pending, state => {
        state.loading = true;
        console.log('pending..');
      })
      .addCase(loadAppContext.fulfilled, (state, action) => {
        state.context = action.payload;
        state.loading = false;
        console.log('fulfilled..');
      })
      .addCase(loadAppContext.rejected, state => {
        state.loading = false;
        console.log('rejected..');
      })
      .addCase(clearAppContext.pending, () => {
        console.log('clearAppContext pending..');
      })
      .addCase(clearAppContext.fulfilled, (state, action) => {
        state.context = action.payload;
        console.log('clearAppContext fulfilled..');
      })
      .addCase(clearAppContext.rejected, (state, action) => {
        state.loading = false;
        console.log('clearAppContext rejected..');
      })
      .addCase(saveAppContext.pending, state => {
        console.log('saveAppContext pending...');
      })
      .addCase(saveAppContext.fulfilled, (state, action) => {
        switch (action.payload.key) {
          case AsyncStore.USER_TOKEN:
            state.context.userToken = action.payload.status;
            break;
          case AsyncStore.NEW_USER:
            state.context.newUser = action.payload.status;
            break;
          case AsyncStore.AUTH_LAYER_SET_BY_USER:
            state.context.authLayersetByUser = action.payload.status;
            break;
          case AsyncStore.NOTIFICATIONS_ENABLED:
            state.context.notificationEnabled = action.payload.status;
            break;
          case AsyncStore.ON_BOARDING_COMPLETED:
            state.context.onBoardingCompleted = action.payload.status;
            break;
          case AsyncStore.CURRENCY_DETAILS_SET_BY_USER:
            state.context.currencySetByUser = action.payload.status;
            console.log(action.payload.status);
            break;
          default:
            console.log('No action found');
            break;
        }

        console.log('saveAppContext fulfilled...');
      });
  },
});

export default appContextSlice.reducer;
