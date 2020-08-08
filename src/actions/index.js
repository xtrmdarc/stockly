export const FILTER_STOCKS = 'FILTER_STOCKS';

export const filterStocks = stocks => ({
  type: FILTER_STOCKS,
  stocks,
});
