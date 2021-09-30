import { createStore, combineReducers } from "redux";

import counterReducer from "./modules/counter/reducer";

const reducers = combineReducers({ counter: counterReducer });

const store = createStore(reducers);

export default store;
