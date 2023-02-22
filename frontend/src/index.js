import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../src/redux/store/store";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <HomePage />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
