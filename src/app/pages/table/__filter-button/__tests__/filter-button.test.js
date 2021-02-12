import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import FilterButton from "../filter-button";
import React from "react";

describe("FilterButton tests", () => {
  const mockHandleClick = jest.fn();

  const props = {
    name: "Металлы",
    group: "metal",
    gridArea: "1/2/1/2",
    FilterButtonClick: mockHandleClick,
  };
  const initialState = {
    activeButton: {
      metal: false,
      semiMetal: false,
      nonMetal: false,
    },
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <FilterButton {...props} />
      </Provider>
    );
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("click test", () => {
    wrapper.find("button").simulate("click");

    expect(wrapper.props().store.getActions()).toEqual([
      { type: "FILTER_BUTTON_CLICK", value: "metal" },
    ]);
  });
});
