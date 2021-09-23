import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { UsersReducer } from "../users/reducers";

import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
export default function createStore(history) {
  let middleWares = [routerMiddleware(history), thunk];
  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    middleWares.push(logger);
  }
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(...middleWares)
  );
}
