import {
  ELEMENTS_LOAD,
  ELEMENT_CLICK,
  ELEMENT_MOUSE_ENTER,
  FILTER_BUTTON_CLICK,
  HIDE_SPINNER,
  SHOW_SPINNER,
  SEARCH_ELEMENT,
  GET_PAGE_ID,
  GET_PAGE_CONTENT,
  CLEAR_DESCRIPTION,
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
        activeElement: {
          ...state.activeElement,
          name: action.value,
        },
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
    case SEARCH_ELEMENT:
      const searchedElements = state.elements.map((item) => {
        if (action.value === '') {
          return { ...item, active: false };
        }
        if (item.name.includes(action.value)) {
          return { ...item, active: true };
        }
        if (!item.name.includes(action.value)) {
          return { ...item, active: false };
        }
        return { ...item };
      });
      return {
        ...state,
        elements: [...searchedElements],
      };
    case GET_PAGE_ID:
      return {
        ...state,
        activeElement: {
          ...state.activeElement,
          pageId: action.value,
        },
      };

    case GET_PAGE_CONTENT:
      return {
        ...state,
        activeElement: {
          ...state.activeElement,
          content: action.value,
        },
      };

    case CLEAR_DESCRIPTION:
      return {
        ...state,
        activeElement: {
          ...state.activeElement,
          pageId: 0,
          content: '',
        },
      };

    default:
      return state;
  }
}
