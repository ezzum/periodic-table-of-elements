import { rootReducer } from "../reducers";
import * as types from "../types";

describe("reducer test", () => {
  const testState = {
    elements: [],
    activeButton: {
      metal: false,
      semiMetal: false,
      nonMetal: false,
    },
  };

  it("should return initial state", () => {
    expect(rootReducer(testState, {})).toEqual(testState);
  });

  it("ELEMENTS_LOAD", () => {
    const action = {
      type: types.ELEMENTS_LOAD,
      value: ["H", "Li"],
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      elements: action.value,
    });
  });

  it("ELEMENT_MOUSE_ENTER", () => {
    const action = {
      type: types.ELEMENT_MOUSE_ENTER,
      value: "H",
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      previewElement: action.value,
    });
  });

  it("ELEMENT_CLICK", () => {
    const action = {
      type: types.ELEMENT_CLICK,
      value: "H",
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      activeElement: action.value,
    });
  });

  it("FILTER_BUTTON_CLICK", () => {
    const action = {
      type: types.FILTER_BUTTON_CLICK,
      value: "metal",
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      activeButton: {
        metal: true,
        semiMetal: false,
        nonMetal: false,
      },
    });
  });

  it("SHOW_SPINNER", () => {
    const action = {
      type: types.SHOW_SPINNER,
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      loading: true,
    });
  });

  it("HIDE_SPINNER", () => {
    const action = {
      type: types.HIDE_SPINNER,
    };
    expect(rootReducer(testState, action)).toEqual({
      ...testState,
      loading: false,
    });
  });
});
