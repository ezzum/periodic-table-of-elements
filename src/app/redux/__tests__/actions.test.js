import * as types from "../types";
import * as actions from "../actions";
import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

const middlewares = [thunk];
const initStore = {};
const mockStore = configureMockStore(middlewares);
let store;

describe("actions test", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("showSpinner", () => {
    const expectedAction = {
      type: types.SHOW_SPINNER,
    };
    expect(actions.showSpinner()).toEqual(expectedAction);
  });

  it("hideSpinner", () => {
    const expectedAction = {
      type: types.HIDE_SPINNER,
    };
    expect(actions.hideSpinner()).toEqual(expectedAction);
  });

  it("ElementsLoad", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          elements: ["H", "Li"],
        },
      });
    });

    const expectedActions = [
      {
        type: types.SHOW_SPINNER,
      },
      {
        type: types.ELEMENTS_LOAD,
        value: ["H", "Li"],
      },
      {
        type: types.HIDE_SPINNER,
      },
    ];

    store = mockStore(initStore);
    return store.dispatch(actions.ElementsLoad()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("ElementMouseEnter", () => {
    const expectedAction = {
      type: types.ELEMENT_MOUSE_ENTER,
      value: "H",
    };
    expect(actions.ElementMouseEnter("H")).toEqual(expectedAction);
  });

  it("ElementClick", () => {
    const expectedAction = {
      type: types.ELEMENT_CLICK,
      value: "H",
    };
    expect(actions.ElementClick("H")).toEqual(expectedAction);
  });

  it("FilterButton", () => {
    const expectedAction = {
      type: types.FILTER_BUTTON_CLICK,
      value: "metal",
    };
    expect(actions.FilterButtonClick("metal")).toEqual(expectedAction);
  });
});
