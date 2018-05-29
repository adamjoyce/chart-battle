import React from 'react';
import styled from 'styled-components';

const NoMatchText = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
  line-height: ${(props => props.theme.h2.lineHeight)};
`;

const NoMatch = ({location}) => (
  <NoMatchText>
    '{location.pathname}' isn't a page.<br/>
    Check yo'self.
  </NoMatchText>
);

export default NoMatch;
