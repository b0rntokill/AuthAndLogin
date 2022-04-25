import { combineReducers } from "redux";
import { NameSpace } from "../const";
import { userData } from "./user-process-data";

export const rootReducer = combineReducers({
  [NameSpace.user]: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
