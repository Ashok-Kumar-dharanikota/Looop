import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncStore} from '../../../config/AsyncStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const retrieveAll = createAsyncThunk('auth/retrieveAll', async () => {
  try {
    const userToken = await AsyncStorage.getItem(AsyncStore.USER_TOKEN);
    const username = await AsyncStorage.getItem(AsyncStore.USERNAME);
    const email = await AsyncStorage.getItem(AsyncStore.EMAIL);

    return {username, userToken, email};
  } catch (error) {
    console.log(error);
    return {username: null, userToken: null, email: null};
  }
});

export default retrieveAll;
