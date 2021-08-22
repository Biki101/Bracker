import { combineReducers } from "redux";
// import persistReducer from "redux-persist/es/persistReducer";
import userReducer from "./user/reducer";
import storage from "../storage";
import persistReducer from "redux-persist/lib/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
