import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";

import Table from "../table";

jest.mock("../__elements/elements-grid", () => "div");
jest.mock("../__column-numbers/column-numbers", () => "div");
jest.mock("../__row-numbers/row-numbers", () => "div");
jest.mock("../../../spinner/spinner", () => "div");

describe("Table tests", () => {
  const initialStore = {
    tableProps: {
      columns: 18,
      rows: 7,
    },
    loading: true,
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <Table />
      </Provider>
    );
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
