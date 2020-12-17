import React, {useState, useEffect} from 'react';

import Table from '../table/table';
import GetData from '../get-data/get-data';
import './app.scss';
const App = () => {

  const [elements, setElements] = useState([]);
  const tableProps = {
    columnsNumber: 18, 
    rowsNumber: 7
  }

  useEffect(() => {
    GetData().then(elements => setElements(elements))
  },[])

  return (
      <div className='app'>
          <h1 className='app__title'>Периодическая таблица элементов</h1>
          <Table 
            elements = {elements}
            tableProps = {tableProps}
          />
      </div>
  );
    
}

export default App;