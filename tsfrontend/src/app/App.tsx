import React from "react";
import Router from "app/Router";
import { Provider } from "react-redux";
import store from "redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
