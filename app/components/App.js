import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link,
        Redirect} from 'react-router-dom';
import styled, {injectGlobal, ThemeProvider} from 'styled-components';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import queryString from 'query-string';

import baseStyles from '../baseStyles';
import {theme} from '../themes';
import {authenticateForToken} from '../utils/api';
import {randomString} from '../utils/helpers';
import Battle from './Battle';
import Chart from './Chart';
import NoMatch from './NoMatch';
import Button from './Button';
import Loading from './Loading';

const PageWrapper = styled.div`
  margin: 0 1rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  padding: 1rem 0;
  position: relative;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 4rem;
`;

const Warning = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props => props.theme.h2.size)};
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null
    }

    const hash = window.location.hash;
    if (hash !== '') {
      const parsedHash = queryString.parse(hash);

      // Sets the accessToken if one is present.
      this.state.accessToken = parsedHash;
    }
  }

  componentDidMount() {
    baseStyles();
    // Get the user to authenticate for an access token.
    if (this.state.accessToken === null) {
      authenticateForToken();
    }
  }

  render() {
    const {accessToken} = this.state;
    console.log(accessToken);
    return (
      <Router>
        <Route render={({location}) => (
          <ThemeProvider theme={theme}>
            <PageWrapper>
              <Title>Chart Battle</Title>
              {accessToken === null
                ? // Spotify authentication required.
                  <ContentWrapper>
                    <Loading
                      text='Redirecting to Spotify'
                      color={theme.colors.primary}
                      fontSize={theme.h2.size}
                    />
                  </ContentWrapper>
                : // User already has an access token.
                  <React.Fragment>
                    <ContentWrapper>
                      <Switch>
                        <Route exact path='/' />
                        <Route exact path='/battle' component={Battle} />
                        <Route exact path='/top50' render={() =>
                          <Chart token={accessToken} />}
                        />
                        <Route component={NoMatch} />
                      </Switch>
                    </ContentWrapper>
                    <Link to='/battle'><Button>Battle</Button></Link>
                    <Link to='/top50'><Button>Top50</Button></Link>
                  </React.Fragment>}
            </PageWrapper>
          </ThemeProvider>
        )} />
      </Router>
    );
  }
}

export default App;
