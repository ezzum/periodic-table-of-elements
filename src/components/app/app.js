import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Table from '../table/table';
import Description from '../description/description';
import GetElements from '../get-elements/get-elements';
import ErrorBoundary from '../error-boundary/error-boundary';
import './app.scss';
function App() {

  const [elements, setElements] = useState([]);
  const [activeElements, setActiveElements] = useState('');
  const [previewElement, setPreviewElement] = useState('');

  useEffect(() => {
    GetElements().then(elements => setElements(elements))
  },[])

  function redirectInfo(name) {
    setActiveElements(name)
  } 

  function preview(item) {
      setPreviewElement(item)
  }

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/description'>
            <Description activeElements={activeElements}/>
          </Route>
          <Route path='/'>
              <h1 className='app__title'>Периодическая таблица элементов</h1>
              <ErrorBoundary>
                <Table 
                  elements = {elements}
                  tableProps = {{columns: 18, rows: 7}}
                  redirectInfo = {redirectInfo}
                  preview = {preview}
                  previewElement = {previewElement}
                />
              </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;