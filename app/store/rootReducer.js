import {combineReducers} from 'redux';
import authSlice from '../features/auth/redux/authSlice';
import onBoardingSlice from '../features/onboardiing/redux/onBoardingSlice';

export default combineReducers({
  authSlice,
  onBoardingSlice,
});
