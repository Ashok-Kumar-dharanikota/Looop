import {combineReducers} from 'redux';
import appcontext from './Slices/appcontext';
import auth from './Slices/auth';
import user from './Slices/user';

export default combineReducers({
  appcontext,
  auth,
  user,
});
