import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/filterActions";

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

const Type = ({ children: type, setFilter }) => {
  const color = typeColors[type.toLowerCase()];
  return (
    <StyledSpan
      color={color}
      onClick={() => setFilter(type)}
      className="filter-item"
    >
      {type}
    </StyledSpan>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilter: type => dispatch(setFilter(type))
});

export default connect(null, mapDispatchToProps)(Type);
