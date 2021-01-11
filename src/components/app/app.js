import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {ElementsLoad} from './redux/actions';
import Table from '../table/table';
import Description from '../description/description';
import GetElements from '../get-elements/get-elements';
import ErrorBoundary from '../error-boundary/error-boundary';

import {AppStyled} from './app-styled';

function App({ElementsLoad}) {

  useEffect(() => {
    GetElements().then(elements => ElementsLoad(elements
        .map((item) => {
          return {...item, ...{active: false}};
        })))
  },[ElementsLoad])

  return (
    <AppStyled>
      <Router>
        <Switch>
          <Route path='/description'>
            <Description/>
          </Route>
          <Route path='/'>
              <h1 className='app__title'>Периодическая таблица элементов</h1>
              <ErrorBoundary>
                <Table/>
              </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </AppStyled>
  );
}

const mapDispatchToProps = {
  ElementsLoad
}

export default connect(null, mapDispatchToProps)(App);