import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../styles/mediaTemplates';
import {transform} from '../utils/styles';

const GlowingOrb = styled.div`
  background: #fff;
  border-radius: 50%;
  box-shadow:
    inset 0 0 50px #fff,
    inset 0 20px 80px ${(props) => props.theme.colors.primary},
    inset 0 -20px 80px ${(props) => props.theme.colors.secondary},
    inset 0 20px 300px ${(props) => props.theme.colors.primary},
    inset 0 -20px 300px ${(props) => props.theme.colors.secondary},
    0 0 50px #fff,
    0 -10px 80px ${(props) => props.theme.colors.primary},
    0 10px 80px ${(props) => props.theme.colors.secondary};
  height: ${(props) => props.height};
  margin: auto;
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  width: ${(props) => props.width};

  ${media.minWidth.small`
    ${transform('rotate(-90deg)')};
  `};
`;

GlowingOrb.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

GlowingOrb.defaultProps = {
  height: '10rem',
  width: '10rem'
}

export default GlowingOrb;
