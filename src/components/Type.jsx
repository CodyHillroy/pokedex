import React from 'react';
import { typeColors } from '../typecolors/typeColors';
import styled, { css } from 'styled-components';

const Type = styled.span`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 2px;
  margin-right: 8px;
  color: white;
  ${props => css`
    background: rgb(${typeColors[props.children.toLowerCase()]});
  `}
`;

export default Type;