import React from "react";
import Router from "app/Router";
import { Provider } from "react-redux";
import store from "redux/store";
import "app/app.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
