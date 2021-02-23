export const initialState = {
  elements: [],
  activeElement: {
    name: '',
    pageId: 0,
    content: '',
  },
  previewElement: {
    name: 'Наведите курсор',
    group: 'на любой',
    symbol: 'элемент',
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
  loading: false,
};
