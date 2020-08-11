import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MostGainers from './MostGainers';
import MostLosers from './MostLosers';

const AboveTheFold = props => {
  const { displayMainContent } = props;

  return (
    <div className="aboveTheFold">
      <div className="mainContent" style={{ display: displayMainContent ? 'block' : 'none' }} data-testid="mainContent" >
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

AboveTheFold.propTypes = {
  displayMainContent: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  displayMainContent: state.displayMainContent,
});

export default connect(mapStateToProps)(AboveTheFold);
