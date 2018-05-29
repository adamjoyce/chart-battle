import React from 'react';
import styled from 'styled-components'

const Text = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Battle = () => (
  <Text>BATTLE</Text>
);

export default Battle;
