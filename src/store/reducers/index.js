import { combineReducers } from 'redux';
import offersReducer from './offersReducer';

export default combineReducers({
  offers: offersReducer,
});
