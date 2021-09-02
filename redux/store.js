import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
