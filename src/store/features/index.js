import { combineReducers } from "redux";
import admin from "./adminSlice";
import session from "./sessionSlice";
import booking from "./bookingSlice";

export const rootReducers = combineReducers({
  admin,
  session,
  booking,
});
