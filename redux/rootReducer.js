import { combineReducers } from "redux";
// import persistReducer from "redux-persist/es/persistReducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
