import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link,
        Redirect} from 'react-router-dom';
import styled, {injectGlobal, ThemeProvider} from 'styled-components';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import queryString from 'query-string';

import baseStyles from '../styles/baseStyles';
import {theme} from '../styles/themes';
import {authenticateForToken, getPlaylist} from '../utils/api';
import {randomString} from '../utils/helpers';
import LandingPage from './LandingPage';
import Battle from './Battle';
import Chart from './Chart';
import NoMatch from './NoMatch';
import Button from './Button';
import Loading from './Loading';

const PageWrapper = styled.div`
  margin: 0 1rem;
  text-align: center;
`;

// const GlowBall = styled.div`
//   background: #fff;
//   border-radius: 50%;
//   box-shadow:
//     inset 0 0 50px #fff,
//     inset 20px 0 80px #f0f,
//     inset -20px 0 80px #0ff,
//     inset 20px 0 300px #f0f,
//     inset -20px 0 300px #0ff,
//     0 0 50px #fff,
//     -10px 0 80px #f0f,
//     10px 0 80px #0ff;
//   height: 10rem;
//   margin: 0 auto;
//   width: 10rem;
// `;

// const ContentWrapper = styled.div`
//   padding: 1rem 0;
//   position: relative;
// `;
//
// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.primary};
//   font-size: 4rem;
// `;
//
// const Warning = styled.h2`
//   color: ${(props) => props.theme.colors.primary};
//   font-size: ${(props => props.theme.h2.size)};
// `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      chartTracks: null,
      chartUserId: 'spotifycharts',
      chartPlaylistId: '37i9dQZEVXbMDoHDwVN2tF'
    }

    const hash = window.location.hash;
    if (hash !== '') {
      const parsedHash = queryString.parse(hash);

      // Sets the accessToken if one is present.
      this.state.accessToken = parsedHash;
    }
  }

  async componentDidMount() {
    const {accessToken,
           chartTracks,
           chartUserId,
           chartPlaylistId} = this.state;

    baseStyles();

    // Get the user to authenticate for an access token.
    if (accessToken === null) {
      authenticateForToken();
    }
    else if (chartTracks === null) {
      // Grab the top 50 from the Spotify API to pass to sub componenets.
      const chartTracks = await getPlaylist(
        chartUserId, chartPlaylistId, accessToken);

      this.setState(() => ({chartTracks}));
    }
  }

  render() {
    const {accessToken, chartTracks} = this.state;
    console.log(accessToken);
    console.log(chartTracks);
    return (
      <Router>
        <Route render={({location}) => (
          <ThemeProvider theme={theme}>
            {accessToken === null
              ? <Loading
                  text='Redirecting to Spotify'
                  color={theme.colors.primary}
                  fontSize={theme.font.medium}
                />
              : <LandingPage></LandingPage>}
            {/* <Title>Chart Battle</Title>
            {accessToken === null
              ? // Spotify authentication required.
                <ContentWrapper>
                  <Loading
                    text='Redirecting to Spotify'
                    color={theme.colors.primary}
                    fontSize={theme.h2.size}
                  />
                </ContentWrapper>
              : chartTracks === null
                  ? // Wait to grab the chart tracks from the api.
                    <ContentWrapper>
                      <Loading
                        color={theme.colors.primary}
                        fontSize={theme.h2.size}
                      />
                    </ContentWrapper>
                  : // User has access token and tracks from api.
                    <React.Fragment>
                      <ContentWrapper>
                        <Switch>
                          <Route exact path='/' />
                          <Route exact path='/battle' component={Battle} />
                          <Route exact path='/top50' render={() =>
                            <Chart tracks={chartTracks} />}
                          />
                          <Route component={NoMatch} />
                        </Switch>
                      </ContentWrapper>
                      <Link to='/battle'><Button>Battle</Button></Link>
                      <Link to='/top50'><Button>Top50</Button></Link>
                    </React.Fragment>} */}
          </ThemeProvider>
        )} />
      </Router>
    );
  }
}

export default App;
