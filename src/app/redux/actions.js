import axios from 'axios';
import {
  ELEMENTS_LOAD,
  ELEMENT_CLICK,
  ELEMENT_MOUSE_ENTER,
  FILTER_BUTTON_CLICK,
  HIDE_SPINNER,
  SHOW_SPINNER,
  SEARCH_ELEMENT,
} from './types';

export function showSpinner() {
  return {
    type: SHOW_SPINNER,
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
  };
}

export function ElementsLoad() {
  return async (dispatch) => {
    try {
      dispatch(showSpinner());
      const url = 'https://data-base-chem.herokuapp.com/table';
      const response = await axios.get(url);
      const elements = response.data.elements.map((item) => {
        return { ...item, active: false };
      });
      dispatch({ type: ELEMENTS_LOAD, value: elements });
      dispatch(hideSpinner());
    } catch (error) {
      return null;
    }
  };
}

export function ElementMouseEnter(value) {
  return {
    type: ELEMENT_MOUSE_ENTER,
    value,
  };
}

export function ElementClick(value) {
  return {
    type: ELEMENT_CLICK,
    value,
  };
}

export function FilterButtonClick(value) {
  return {
    type: FILTER_BUTTON_CLICK,
    value,
  };
}

export function SearchElement(value) {
  return {
    type: SEARCH_ELEMENT,
    value,
  };
}
