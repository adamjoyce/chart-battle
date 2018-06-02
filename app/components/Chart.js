import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
`;

class Chart extends React.Component {
  render() {
    const {tracks} = this.props;
    return (
      <React.Fragment>
        <ol>
          {tracks.map((track) =>
            <li>{track.track.name}</li>      
          )}
        </ol>
      </React.Fragment>
    );
  }
}

Chart.propTypes = {
  tracks: PropTypes.array.isRequired
}

export default Chart;
