import React from 'react';
import styled from 'styled-components'

const Text = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
`;

const Battle = () => (
  <Text>Battle</Text>
);

export default Battle;
