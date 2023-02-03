import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();
 
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  rootReducer,
//   persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
