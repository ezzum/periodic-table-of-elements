import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app/app";
import { Provider } from "react-redux";
import store from "./app/redux/store";

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.hydrate(app, document.getElementById("root"));
