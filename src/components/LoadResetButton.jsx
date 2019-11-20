import React from "react";
import { connect } from 'react-redux';

const LoadResetButton = ({ type, fetchingDataState, nextUrl, onClickAction }) => {
  const title = type === 'load' ? 'Load more' : 'Reset filter';
  const isDisabled = fetchingDataState === 'request' || !nextUrl;
  return (
    <button className={`btn ${type}`} onClick={onClickAction} disabled={isDisabled} >
      { title }
    </button>
  );
};

const mapStateToProps = state => ({
  fetchingDataState: state.fetchingDataState,
  nextUrl: state.nextUrl,
});

export default connect(mapStateToProps)(LoadResetButton);
