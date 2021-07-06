import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SearchReducer } from "../components/search";

const persistConfig = {
  key: "root",
  storage
};

const searchAppReducer = combineReducers({
  search: SearchReducer
});

const persistedReducer = persistReducer(persistConfig, searchAppReducer);

export function initializeStore() {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
}
