import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

const loadAppContext = createAsyncThunk(
  'appcontext/loadAppContext',
  async () => {
    try {
      const onBoardingCompleted = await AsyncStorage.getItem(
        'onBoardingCompleted',
      );

      const userToken = await AsyncStorage.getItem('userToken');
      const newUser = await AsyncStorage.getItem('newUser');
      const notificationEnabled = await AsyncStorage.getItem(
        'notificationEnabled',
      );
      const authLayersetByUser = AsyncStorage.getItem('authLayersetByUser');

      return {
        onBoardingCompleted: onBoardingCompleted == 'true',
        userToken: userToken,
        newUser: newUser == 'false' ? false : true,
        notificationEnabled: notificationEnabled == 'true' ? true : false,
        authLayersetByUser: authLayersetByUser == 'true',
      };
    } catch (error) {
      console.log('Error loading data from Async Storage', error);
      return {
        OnBoardingCompleted: false,
        userToken: userToken,
        newUser: true,
        notificationEnabled: false,
        authLayersetByUser: false,
      };
    }
  },
);

const clearAppContext = createAsyncThunk(
  'appcontext/clearAppContext',
  async () => {
    try {
      await AsyncStorage.clear();

      return {
        onBoardingCompleted: false,
        userToken: false,
        newUser: true,
        notificationEnabled: false,
        authLayersetByUser: false,
      };
    } catch (error) {
      console.log('Error clearing data from Async Storage', error);
      return null;
    }
  },
);

const saveAppContext = createAsyncThunk(
  'appcontext/saveAppContext',
  async item => {
    const {key, status} = item;
    try {
      await AsyncStorage.setItem(key, status.toString());
      return {
        key: key,
        status: status,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);

export {loadAppContext, clearAppContext, saveAppContext};
