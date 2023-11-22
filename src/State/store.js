import rootreducers from "./reducers/index";
import thunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
export const store = createStore(rootreducers, {}, applyMiddleware(thunk))
//reducers,intital-state,middleware...