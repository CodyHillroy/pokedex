import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filterActions';
 
import { typeColors } from "../typecolors/typeColors";
import styled, { css } from "styled-components";

const StyledSpan = styled.span`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 2px;
  margin-right: 8px;
  color: white;
  ${props => css`
    background: rgb(${props.color});
  `}
`;

const Type = ({ children, setFilter }) => {
  const color = typeColors[children.toLowerCase()];
  return <StyledSpan color={color} onClick={() => setFilter(children)} className="filter-item">{children}</StyledSpan>;
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (type) => dispatch(setFilter(type)),
});

export default connect(null, mapDispatchToProps)(Type);
