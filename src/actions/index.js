export const FILTER_STOCKS = 'FILTER_STOCKS';
export const TOGGLE_DISPLAY_MAIN = 'TOGGLE_DISPLAY_MAIN';

export const filterStocks = stocks => ({
  type: FILTER_STOCKS,
  stocks,
});

export const toggleDisplayMain = status => ({
  type: TOGGLE_DISPLAY_MAIN,
  status,
});