import { ELEMENTS_LOAD, ELEMENT_CLICK, ELEMENT_MOUSE_ENTER } from "./types";
import { initialState } from './initialState';

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ELEMENTS_LOAD : 
            return {...state, elements: action.value};
        case ELEMENT_MOUSE_ENTER : 
            return {...state, previewElement: action.value};
        case ELEMENT_CLICK :
            return {...state, activeElement: action.value};
        default: return state;
    }
}