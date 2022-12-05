import { combineReducers } from "redux";
import admin from "./adminSlice";
import session from "./sessionSlice";

export const rootReducers = combineReducers({
  admin,
  session,
});
