import { Provider } from "react-redux";
import React from "react";
import store from "../../../redux/store";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import Table from "../table";
import { initialState } from "../../../redux/initialState";

let wrapper;

describe("Table real store", () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Table />
      </Provider>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("initState", () => {
    expect(wrapper.props().store.getState()).toEqual(initialState);
  });
  it("Column number", () => {
    expect(wrapper.find(".table__column-number")).toHaveLength(
      initialState.tableProps.columns
    );
  });
  it("Row number", () => {
    expect(wrapper.find(".table__row-number")).toHaveLength(
      initialState.tableProps.rows
    );
  });
  it("Button", () => {
    expect(wrapper.find("button")).toHaveLength(
      Object.keys(initialState.activeButton).length
    );
  });
  it("Preview name", () => {
    expect(wrapper.find("div.preview").childAt(1).text()).toEqual(
      initialState.previewElement.name
    );
  });
  it("Preview group", () => {
    expect(wrapper.find("div.preview").childAt(2).text()).toEqual(
      initialState.previewElement.group
    );
  });
  it("Preview symbol", () => {
    expect(wrapper.find("div.preview").childAt(3).text()).toEqual(
      initialState.previewElement.symbol
    );
  });
  it("no Spinner", () => {
    expect(wrapper.find("Spinner")).toHaveLength(0);
  });
});

describe("Table mock store loading: true", () => {
  const initStore = {
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
      {
        symbol: "He",
        number: 2,
        name: "гелий",
        atomicMass: 4.002,
        column: 18,
        row: 1,
        group: "nonMetal",
      },
      {
        symbol: "Li",
        number: 3,
        name: "литий",
        atomicMass: 6.941,
        column: 1,
        row: 2,
        group: "metal",
      },
    ],
    activeElement: "",
    previewElement: {
      name: "Наведите курсор",
      group: "на любой",
      symbol: "элемент",
    },
    tableProps: {
      columns: 18,
      rows: 7,
    },
    activeButton: {
      metal: false,
      semiMetal: false,
      nonMetal: false,
    },
    loading: true,
  };
  let fakeStore;
  const mockStore = configureStore();

  beforeEach(() => {
    fakeStore = mockStore({ ...initStore, loading: true });
    wrapper = mount(
      <Provider store={fakeStore}>
        <Table />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Spinner", () => {
    expect(wrapper.find("Spinner")).toHaveLength(1);
  });
  it("no Elements", () => {
    expect(wrapper.find("a")).toHaveLength(0);
  });
  it("no Preview", () => {
    expect(wrapper.find(".preview")).toHaveLength(0);
  });
  it("no Button", () => {
    expect(wrapper.find("button")).toHaveLength(0);
  });
  it("no Column number", () => {
    expect(wrapper.find(".table__column-number")).toHaveLength(0);
  });
  it("no Row number", () => {
    expect(wrapper.find(".table__row-number")).toHaveLength(0);
  });
});
