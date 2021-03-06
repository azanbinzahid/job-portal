import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "redux/reducers";

const middleware = [thunk];
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
