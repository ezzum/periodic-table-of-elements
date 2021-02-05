import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../app";
import React from "react";

jest.mock(".././pages/table/table", () => "div");
jest.mock(".././pages/description/description", () => "div");
jest.mock(".././error-boundary/error-boundary", () => "div");

describe("App tests", () => {
  const fakeElements = [
    {
      symbol: "H",
      number: 1,
      name: "водород",
      atomicMass: 1.007,
      column: 1,
      row: 1,
      group: "nonMetal",
    },
  ];
  const initialStore = {};
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve(fakeElements),
      });
    });
    store = mockStore(initialStore);
    wrapper = async () => {
      mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
    };
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
