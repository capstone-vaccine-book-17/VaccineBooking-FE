import { combineReducers } from "redux";
import admin from "./adminSlice";
import session from "./sessionSlice";
import booking from "./bookingSlice";
import vaccine from "./vaccineSlice";

export const rootReducers = combineReducers({
  admin,
  session,
  booking,
  vaccine,
});
