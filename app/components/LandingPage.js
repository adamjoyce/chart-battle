import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import GlowingOrb from './GlowingOrb';
import media from '../styles/mediaTemplates';
import {transform, textShadow} from '../utils/styles';

// Top level relative wrapper for the landing page.
const LandingWrapper = styled.div`
  position: relative;
  height: 100%;
`;

// Wrappers for menu options are derived from this 'superclass' wrapper.
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  text-align: center;
  width: 100%;

  ${media.minWidth.small`
    height: 100%;
    width: 50%;
  `};
`;

// Holds the top/left menu option.
const FirstLinkWrapper = LinkWrapper.extend``;

// Holds the bottom/right menu option.
const SecondLinkWrapper = LinkWrapper.extend`
  bottom: 0;

  ${media.minWidth.small`
    right: 0;
  `};
`;

// Menu option text elements.
const LinkText = styled.span`
  color: #fff;
  display: inline;
  font-size: ${(props) => props.theme.font.medium};

  ${media.minWidth.small`
    opacity: 0;
    transition: all 300ms ease-in-out;
  `};
`;

// Top/left menu option hover effect.
const FirstLinkText = LinkText.extend`
  text-shadow: ${(props) => textShadow(props.theme.colors.primary)};

  ${FirstLinkWrapper}:hover & {
    text-shadow: ${(props) => textShadow(props.theme.colors.primary, true)};
  }

  ${media.minWidth.small`
    text-align: right;

    ${FirstLinkWrapper}:hover & {
      opacity: 1;
      ${transform('translateX(-50%)')};
    }
  `};
`;

// Bottom/right menu option hover effect.
const SecondLinkText = LinkText.extend`
  text-shadow: ${(props) => textShadow(props.theme.colors.secondary)};

  ${SecondLinkWrapper}:hover & {
    text-shadow: ${(props) => textShadow(props.theme.colors.secondary, true)};
  }

  ${media.minWidth.small`
    text-align: left;

    ${SecondLinkWrapper}:hover & {
      opacity: 1;
      ${transform('translateX(50%)')};
    }
  `};
`;

const LandingPage = () => (
  <LandingWrapper>
    <GlowingOrb></GlowingOrb>
    <Link to='/battle'>
      <FirstLinkWrapper>
        <FirstLinkText>Battle</FirstLinkText>
      </FirstLinkWrapper>
    </Link>
    <Link to='/top50'>
      <SecondLinkWrapper>
        <SecondLinkText>Top 50</SecondLinkText>
      </SecondLinkWrapper>
    </Link>
  </LandingWrapper>
);

export default LandingPage;
