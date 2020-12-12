import React, {Component} from 'react';
import Axios from 'axios';

import Table from '../table/table';
import './app.scss';

class App extends Component {

    state = {
        db: {elements: []},
        columnNumber: 18,
        rowNumber: 7,
        incrementStep: 1,
    }

    componentDidMount() {
      const url = 'https://data-base-chem.herokuapp.com/elements';
      
      Axios.get(url)
        .then(response => {
          this.setState({db:{
            elements: [
              ...response.data
            ]
          }})
        })
        .catch(error => console.log(error));
    }

    render() {
        const {elements} = this.state.db;

        return (
            <div className='app'>
                <h1 className='app__title'>Периодическая таблица элементов</h1>
                <Table elements = {elements}/>
            </div>
        );
    };
}

export default App;