import React, {useState, useEffect} from 'react';

import Table from '../table/table';
import GetElements from '../get-elements/get-elements';
import './app.scss';
const App = () => {

  const [elements, setElements] = useState([]);

  useEffect(() => {
    GetElements().then(elements => setElements(elements))
  },[])

  return (
      <div className='app'>
          <h1 className='app__title'>Периодическая таблица элементов</h1>
          <Table 
            elements = {elements}
            tableProps = {{columns: 18, rows: 7}}
          />
      </div>
  );
}

export default App;