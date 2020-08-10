import React from 'react';
import MostGainers from './MostGainers';
import MostLosers from './MostLosers';
import { connect } from 'react-redux';

const AboveTheFold = props => {
  const { displayMainContent } = props;

  return (
    <div className="aboveTheFold">
      <div className="mainContent" style={{display: displayMainContent ? 'block' : 'none'}}>
        <div className="titleHeader">
          <span className="announcement">Currently supporting NASDAQ</span>
          <h1 className="mainTitle">Follow the right stock.</h1>
        </div>
        <div className="featuredMostLists">
          <MostGainers />
          <MostLosers />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  displayMainContent: state.displayMainContent,
});

export default connect(mapStateToProps)(AboveTheFold);
