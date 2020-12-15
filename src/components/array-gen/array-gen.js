import React, {Component} from 'react';

const ArrayGen = (WrappedComponent) => {
    return class extends Component {

        state = {
            numbers: []
        }

        componentDidMount() {

            const numbers = new Array(this.props.numberCount).fill('item')
            .map((_item, idx) => ++idx)
            .map((number) => {
                return (
                    <div key={number} className='table__column-number'>
                        {number}
                    </div>
                )
            })

            this.setState({
                numbers:[...numbers]
            })
        }

        render() {
            return (
                <WrappedComponent {...this.props} numbers={this.state.numbers}/>
            )
        }
    }
}

export default ArrayGen;