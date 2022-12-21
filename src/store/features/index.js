import { combineReducers } from 'redux';
import admin from './adminSlice';
import session from './sessionSlice';
import booking from './bookingSlice';
import vaccine from './vaccineSlice';
import dashboard from './dashboardSlice';
import profile from './profileSlice';

export const rootReducers = combineReducers({
  admin,
  dashboard,
  session,
  booking,
  vaccine,
  profile,
});
