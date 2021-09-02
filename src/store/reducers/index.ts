import { combineReducers } from "redux";
import modals from "./modal";
import todos from "./todos";

const rootReducer = combineReducers({
  modals,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
