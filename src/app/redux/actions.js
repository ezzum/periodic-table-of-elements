import axios from 'axios';
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

export function GetPageId(value) {
  return async (dispatch) => {
    try {
      dispatch(showSpinner());
      let url = 'https://ru.wikipedia.org/w/api.php?origin=*';
      const props = {
        action: 'query',
        list: 'search',
        srsearch: `${value} (элемент)`,
        format: 'json',
      };
      Object.keys(props).forEach(function (key) {
        url += '&' + key + '=' + props[key];
      });
      const response = await axios.get(url);
      const id = response.data.query.search[0].pageid;
      dispatch({ type: GET_PAGE_ID, value: id });
    } catch (error) {
      return null;
    }
  };
}

export function GetPageContent(pageId) {
  return async (dispatch) => {
    try {
      let url = 'https://ru.wikipedia.org/w/api.php?origin=*';
      const props = {
        action: 'parse',
        pageid: `${pageId}`,
        prop: 'text',
        format: 'json',
      };
      Object.keys(props).forEach(function (key) {
        url += '&' + key + '=' + props[key];
      });
      const response = await axios.get(url);
      const data = response.data.parse.text['*'];
      const content = Parser(data);
      dispatch({ type: GET_PAGE_CONTENT, value: content });
      dispatch(hideSpinner());
    } catch (error) {
      return null;
    }
  };
}

export function clearDescription() {
  return {
    type: CLEAR_DESCRIPTION,
  };
}

function Parser(data) {
  return data
    .replace(
      /href="\/wiki/g,
      'target="_blank" rel="noopener noreferrer" href="https://ru.wikipedia.org/wiki'
    )
    .replace(/<div class="hatnote.+>/g, '')
    .replace(/<span class="mw-edit.+span>/g, '');
}
