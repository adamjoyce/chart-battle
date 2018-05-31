import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    const {text, speed} = this.props;
    const stopper = text + '...';

    // Animate ellipsis.
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const {color, fontSize} = this.props;
    return (
      <Text
        color={color}
        fontSize={fontSize}>
        {this.state.text}
      </Text>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
  color: '#000',
  fontSize: '35px',
  textAlign: 'center'
};

export default Loading;
