import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./index.js";
import { composeWithDevTools } from "redux-devtools-extension";


// function saveToLocalStorage(store:string) {
//   try {
//     const serializedStore = JSON.stringify(store);
//     window.localStorage.setItem("store", serializedStore);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedStore = window.localStorage.getItem("store");
//     if (serializedStore === null) return undefined;
//     return JSON.parse(serializedStore);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }
const composeEnhancers = composeWithDevTools({});

// const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
//   persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => saveToLocalStorage(store.getState()));
