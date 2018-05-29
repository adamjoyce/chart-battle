import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styled, {injectGlobal, ThemeProvider} from 'styled-components';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import baseStyles from '../baseStyles';
import {theme} from '../themes';
import Battle from './Battle';
import Chart from './Chart';
import NoMatch from './NoMatch';
import Button from './Button';

const PageWrapper = styled.div`
  margin: 0 1rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 2rem 0;
  position: relative;
  min-height: 2rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 4rem;
`;

class App extends React.Component {
  componentDidMount() {
    baseStyles();
  }

  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <ThemeProvider theme={theme}>
            <PageWrapper>
              <Title>Spotify Battle</Title>
              <ContentWrapper>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade">
                    <Switch location={location}>
                      <Route exact path='/' />
                      <Route exact path='/battle' component={Battle} />
                      <Route exact path='/top50' component={Chart} />
                      <Route component={NoMatch} />
                    </Switch>
                </CSSTransition>
              </TransitionGroup>
              </ContentWrapper>
              <Link to='/battle'><Button>Battle</Button></Link>
              <Link to='/top50'><Button>Top 50</Button></Link>
            </PageWrapper>
          </ThemeProvider>
        )} />
      </Router>
    );
  }
}

export default App;
