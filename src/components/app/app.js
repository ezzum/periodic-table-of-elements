import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Table from '../table/table';
import Description from '../description/description';
import GetElements from '../get-elements/get-elements';
import ErrorBoundary from '../error-boundary/error-boundary';
import './app.scss';
function App() {

  const [elements, setElements] = useState([]);

  useEffect(() => {
    GetElements().then(elements => setElements(elements))
  },[])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/description'>
            <Description/>
          </Route>
          <Route path='/'>
              <h1 className='app__title'>Периодическая таблица элементов</h1>
              <ErrorBoundary>
                <Table 
                  elements = {elements}
                  tableProps = {{columns: 18, rows: 7}}
                />
              </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;