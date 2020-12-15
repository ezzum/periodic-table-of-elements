import React, {Component} from 'react';
import Axios from 'axios';

import Table from '../table/table';
import './app.scss';

class App extends Component {

    state = {
        db: {elements: []},
        tableProps: {
          columnsNumber: 18,
          rowsNumber: 7
        }
    }

    componentDidMount() {
      const url = 'https://data-base-chem.herokuapp.com/table';

      Axios.get(url)
        .then(response => {
          this.setState({
            db:{
              elements: [
                ...response.data.elements
              ],
              columnsNumber: response.data.columnsNumber,
              rowsNumber: response.data.rowsNumber,
            }
          })
        })
        .catch(error => console.log(error));
    }

    render() {
        const {elements} = this.state.db;
        const {tableProps} = this.state;

        return (
            <div className='app'>
                <h1 className='app__title'>Периодическая таблица элементов</h1>
                <Table 
                  elements = {elements}
                  tableProps = {tableProps}
                />
            </div>
        );
    };
}

export default App;