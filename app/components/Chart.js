import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
`;

class Chart extends React.Component {
  render() {
    const {token} = this.props;
    return (
      <React.Fragment>
        <Text>Top50</Text>
        <Text>Your Access Token {token.access_token}</Text>
      </React.Fragment>
    );
  }
}

Chart.propTypes = {
  token: PropTypes.object.isRequired
}

export default Chart;
