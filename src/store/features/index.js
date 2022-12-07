import { combineReducers } from 'redux';
import admin from './adminSlice';
import session from './sessionSlice';
import booking from './bookingSlice';
import vaccine from './vaccineSlice';
import dashboard from './dashboardSlice';

export const rootReducers = combineReducers({
  admin,
  dashboard,
  session,
  booking,
  vaccine,
});
