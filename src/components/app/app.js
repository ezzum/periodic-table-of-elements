import React, {useState, useEffect} from 'react';

import Table from '../table/table';
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
          <h1 className='app__title'>Периодическая таблица элементов</h1>
          <ErrorBoundary>
            <Table 
              elements = {elements}
              tableProps = {{columns: 18, rows: 7}}
            />
          </ErrorBoundary>
      </div>
  );
}

export default App;