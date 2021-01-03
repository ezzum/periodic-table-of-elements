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

import {AppStyled} from './app-styled';

function App() {

  const [elements, setElements] = useState([]);
  const [activeElements, setActiveElements] = useState('');
  const [previewElement, setPreviewElement] = useState('');
  const [activeButton, setActiveButton] = useState({
    metal: false,
    semiMetal: false,
    nonMetal: false
  });

  useEffect(() => {
    GetElements().then(elements => setElements(elements
        .map((item) => {
          return {...item, ...{active: false}};
        })))
  },[])

  function filterElementsGroup(group) {
    const filterElements = elements.map((item) => {
      if(item.group === group) {
        return {...item, ...{active: !item.active}}
      }
      return {...item};
    });
    setElements(filterElements);

    const newActiveButton = {[group]: !activeButton[group]}
    setActiveButton({...activeButton, ...newActiveButton});
  }

  function redirectInfo(name) {
    setActiveElements(name)
  } 

  function preview(item) {
      setPreviewElement(item)
  }

  return (
    <AppStyled>
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
                  filterElementsGroup = {filterElementsGroup}
                  activeButton = {activeButton}
                />
              </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </AppStyled>
  );
}

export default App;