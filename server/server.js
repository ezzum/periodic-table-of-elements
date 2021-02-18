import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/app/app";
import store from "../src/app/redux/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import axios from "axios";
import { ELEMENTS_LOAD } from "../src/app/redux/types";

const PORT = process.env.PORT || 8000;

const app = express();

async function ElementsLoad() {
  const url = "https://data-base-chem.herokuapp.com/table";
  const response = await axios.get(url);
  return response.data.elements;
}

ElementsLoad().then((data) =>
  store.dispatch({ type: ELEMENTS_LOAD, value: data })
);

app.use("^/$", async (req, res, next) => {
  const context = {};

  const jsx = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${jsx}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}...`);
});
