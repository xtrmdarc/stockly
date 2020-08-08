
const StocksApi = (() => {
  const endpoint = 'https://financialmodelingprep.com/api/v3';
  const apiKeyParam = '?apikey=1f11d946aa03452a0512d89de9091858';
  
  const getMostGainersList = () => {
    const url = `${endpoint}/gainers${apiKeyParam}`;
    return new Promise((resolve, reject)  => fetch(url).then(p => p.json().then( data => resolve(data))));
  }

  return { getMostGainersList };

})();

export default StocksApi;