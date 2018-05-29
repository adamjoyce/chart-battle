import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 2px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  outline: 0;
  padding: 0.5rem;
  width: 8rem;

  :hover {
    background:  ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }

  :active {
    background: ${(props) => props.theme.colors.primaryDark};
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }

  @media (max-width: 408px) {
    display: block;
    margin: 1rem auto;
  }
`;

export default Button;
