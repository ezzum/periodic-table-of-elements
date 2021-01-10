import React from 'react';
import {connect} from 'react-redux';

import ExitButton from '../exit-button/exit-button';

function Description({activeElement}) {
    return (
        <div className='description'>
            <ExitButton/>
            <h1>Описание</h1>
            <p className='description__text'>
                {activeElement}
            </p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        activeElement: state.activeElement
    }
}

export default connect(mapStateToProps)(Description);