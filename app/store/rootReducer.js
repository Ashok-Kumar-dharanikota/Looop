import {combineReducers} from 'redux';
import authSlice from '../features/auth/redux/authSlice';
import onBoardingSlice from '../features/onboardiing/redux/onBoardingSlice';
import dashboardSlice from '../features/dashboard/redux/dashboardSlice';

export default combineReducers({
  authSlice,
  onBoardingSlice,
  dashboardSlice,
});
