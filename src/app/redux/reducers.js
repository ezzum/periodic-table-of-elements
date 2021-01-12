import {
  ELEMENTS_LOAD,
  ELEMENT_CLICK,
  ELEMENT_MOUSE_ENTER,
  FILTER_BUTTON_CLICK,
  HIDE_SPINNER,
  SHOW_SPINNER,
} from './types';
import { initialState } from './initialState';

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ELEMENTS_LOAD:
      return {
        ...state,
        elements: action.value,
      };
    case ELEMENT_MOUSE_ENTER:
      return {
        ...state,
        previewElement: action.value,
      };
    case ELEMENT_CLICK:
      return {
        ...state,
        activeElement: action.value,
      };
    case FILTER_BUTTON_CLICK:
      const newActiveButton = {
        ...state.activeButton,
        [action.value]: !state.activeButton[action.value],
      };

      const newElements = state.elements.map((item) => {
        if (item.group === action.value) {
          return { ...item, active: !item.active };
        }
        return { ...item };
      });

      return {
        ...state,
        elements: [...newElements],
        activeButton: { ...newActiveButton },
      };
    case SHOW_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
