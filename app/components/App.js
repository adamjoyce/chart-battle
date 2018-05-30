import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link,
        Redirect} from 'react-router-dom';
import styled, {injectGlobal, ThemeProvider} from 'styled-components';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import queryString from 'query-string';

import baseStyles from '../baseStyles';
import {theme} from '../themes';
import {getAccessToken} from '../utils/api';
import Battle from './Battle';
import Chart from './Chart';
import NoMatch from './NoMatch';
import Button from './Button';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null
    }

    // Set the access token state if present.
    const hash = window.location.hash;
    if (hash !== '') {
      const parsedHash = queryString.parse(hash);
      this.state.accessToken = parsedHash;
    }
  }

  componentDidMount() {
    baseStyles();
    // Get the user to authenticate for an access token.
    if (this.state.accessToken === null) {
      getAccessToken();
    }
  }

  render() {
    const {accessToken} = this.state;
    console.log(accessToken);
    return (
      accessToken !== null
      ? <Router>
          <Route render={({location}) => (
            <ThemeProvider theme={theme}>
              <PageWrapper>
                <Title>Chart Battle</Title>
                <ContentWrapper>
                  <Switch location={location}>
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
              </PageWrapper>
            </ThemeProvider>
          )} />
        </Router>
      : null
    );
  }
}

export default App;
