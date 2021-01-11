import { ELEMENTS_LOAD, ELEMENT_CLICK, ELEMENT_MOUSE_ENTER, FILTER_BUTTON_CLICK } from "./types";

export function ElementsLoad(value) {
    return {
        type: ELEMENTS_LOAD,
        value
    }
}

export function ElementMouseEnter(value) {
    return {
        type: ELEMENT_MOUSE_ENTER,
        value
    }
}

export function ElementClick(value) {
    return {
        type: ELEMENT_CLICK,
        value
    }
}

export function FilterButtonClick(value) {
    return {
        type: FILTER_BUTTON_CLICK,
        value
    }
}