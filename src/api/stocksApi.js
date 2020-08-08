
const StocksApi = (() => {
  const endpoint = 'https://financialmodelingprep.com/api/v3';
  const apiKeyParam = `apikey=1f11d946aa03452a0512d89de9091858`;
  
  const getMostGainersList = () => {
    const url = `${endpoint}/gainers?${apiKeyParam}`;
    return new Promise((resolve, reject)  => fetch(url).then(p => p.json().then( data => resolve(data))));
  }

  const getMostLosersList = () => {
    const url = `${endpoint}/losers?${apiKeyParam}`;
    return new Promise((resolve, reject)  => fetch(url).then(p => p.json().then( data => resolve(data))));
  }

  const getLandingStockList = () => {
    const url = `${endpoint}/quote/AAPL,FB,GOOG,F,MCD,MSFT?${apiKeyParam}`;
    return new Promise((resolve, reject)  => fetch(url).then(p => p.json().then( data => resolve(data))));    
  }

  const searchByQuery = query => {
    const url = `${endpoint}/search?query=${query}&limit=10&${apiKeyParam}`;
    return new Promise((resolve, reject)  => fetch(url).then(p => p.json().then( data => resolve(data))));
  }

  return { getMostGainersList, getMostLosersList, getLandingStockList, searchByQuery };
})();

export default StocksApi;