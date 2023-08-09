import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as authReducer } from "./Auth/Reducer";
import { bidsReducer } from "./Bids/Reducer";

import thunk from "redux-thunk";

//@ts-ignore
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  authReducer,
  bidsReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
