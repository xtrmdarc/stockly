import React from 'react';

const StockCard = props => {
  
  const { featured, stockInfo } = props;
  let renderLayout;
  let up;
  if (featured) {
    up = stockInfo.changes > 0.00 ? true : false;
    renderLayout = (
      <div className="featuredStockCard">
        <h3 className="stockName">{stockInfo.ticker}</h3>
        <div className="rightSection">
          <span className="stockPrice">{stockInfo.price} <span className="price"> USD</span></span>
          <span className={`percentageChange ${up ? 'highColor' : 'downColor'}`}>{stockInfo.changesPercentage}</span>
        </div>
      </div>
    );
  }
  else {
    up = stockInfo.change > 0.00 ? true : false;
    renderLayout = (
      <div className="stockCard">
        <div className="naming">
          <h3 className="stockSymbol">{stockInfo.symbol}</h3>
          <span className="companyName">{stockInfo.name}</span>
        </div>
        
        <div className="bottomSection">
          <div className="leftSection">
            <span> <b>DH</b> {stockInfo.dayHigh} USD</span>
            <span> <b>DL</b> {stockInfo.dayLow} USD</span>
          </div>
          <div className="rightSection">
            <span className="stockPrice" >{stockInfo.price} <span className="currency"> USD</span></span>
            <span className={up ? 'highColor' : 'downColor'}> <span className="change">{stockInfo.change} USD </span><span className="percentageChange">({stockInfo.changesPercentage}%)</span> </span>
          </div>
        </div>
      </div>
    );
  }

  return renderLayout;
}

export default StockCard;