import React from 'react';

const StockCard = props => {
  
  const { featured, stockInfo } = props;
  let renderLayout;

  if (featured) {
    renderLayout = (
      <div className="featuredStockCard">
        <h3>{stockInfo.ticker}</h3>
        <div className="rightSection">
          <span>{stockInfo.price} <span className="price"> USD</span></span>
          <span>{stockInfo.changesPercentage}</span>
        </div>
      </div>
    );
  }
  else {
    renderLayout = (
      <div className="stockCard">
        <h3>{stockInfo.ticker}</h3>
        <div className="rightSection">
          <span>{stockInfo.price} <span className="price"> USD</span></span>
          <span>{stockInfo.changesPercentage}</span>
        </div>
      </div>
    );
  }

  return renderLayout;
}

export default StockCard;