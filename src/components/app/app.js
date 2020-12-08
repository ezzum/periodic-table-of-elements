import React, {Component} from 'react';

import Table from '../table/table';
import './app.scss';
import dbb from '../db/dbb';

class App extends Component {

    state = {
        data: dbb,
    }

    render() {
        const {data} = this.state;

        return (
            <div className='app'>
                <h1 className='app__title'>Периодическая таблица элементов</h1>
                <Table data = {data}/>
            </div>
        );
    };
}

export default App;