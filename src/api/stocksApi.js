/* eslint-disable no-unused-vars */
const StocksApi = (() => {
  const endpoint = 'https://financialmodelingprep.com/api/v3';
  const apiKeyParam = 'apikey=77f4427f83aa6fc8cb2033ca7f3d873d';

  const getMostGainersList = () => {
    const url = `${endpoint}/gainers?${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => resolve(data))));
  };

  const getMostLosersList = () => {
    const url = `${endpoint}/losers?${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => resolve(data))));
  };

  const getLandingStockList = () => {
    const url = `${endpoint}/quote/AAPL,FB,GOOG,AMZN,MCD,MSFT?${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => resolve(data))));
  };

  const getQuotesByArraySymbols = arr => {
    const url = `${endpoint}/quote/${arr.join(',')}?${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => resolve(data))));
  };

  const searchByQuery = query => {
    const url = `${endpoint}/search?query=${query}&exchange=NASDAQ&limit=9&${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => getQuotesByArraySymbols(data.map(p => p.symbol))
        .then(a => resolve(a)))));
  };

  const quoteBySymbol = symbol => {
    const url = `${endpoint}/quote/${symbol}?${apiKeyParam}`;
    return new Promise((resolve, reject) => fetch(url)
      .then(p => p.json().then(data => resolve(data[0]))));
  };

  return {
    getMostGainersList, getMostLosersList, getLandingStockList, searchByQuery, quoteBySymbol,
  };
})();

export default StocksApi;
/* eslint-enable no-unused-vars */
