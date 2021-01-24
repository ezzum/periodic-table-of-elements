import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import ElementsGrid from "../elements-grid";
import React from "react";
import { ELEMENT_CLICK, ELEMENT_MOUSE_ENTER } from "../../../../redux/types";

jest.mock("../../__preview/preview", () => "div");
jest.mock("../../__filter-button/filter-button", () => "div");
jest.mock("react-router-dom", () => ({
  Link: "a",
  Route: ({ children, path }) => children({ match: path === "/description" }),
}));

describe("Elements tests", () => {
  const props = {
    ElementMouseEnter: jest.fn(),
    ElementClick: jest.fn(),
  };

  const initialStore = {
    elements: [
      {
        symbol: "H",
        number: 1,
        name: "водород",
        atomicMass: 1.007,
        column: 1,
        row: 1,
        group: "nonMetal",
      },
    ],
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <ElementsGrid {...props} />
      </Provider>
    );
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("click element test", () => {
    wrapper.find("a").simulate("click");

    expect(wrapper.props().store.getActions()).toEqual([
      { type: ELEMENT_CLICK, value: "водород" },
    ]);
  });

  it("mouse enter element test", () => {
    wrapper.find("a").simulate("mouseEnter");

    expect(wrapper.props().store.getActions()).toEqual([
      {
        type: ELEMENT_MOUSE_ENTER,
        value: {
          symbol: "H",
          number: 1,
          name: "водород",
          atomicMass: 1.007,
          column: 1,
          row: 1,
          group: "nonMetal",
        },
      },
    ]);
  });
});
