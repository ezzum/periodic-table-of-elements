import React, { Component } from 'react';

function ArrayOfNumber(WrappedComponent, className) {
  return class extends Component {
    state = {
      numbers: [],
    };

    componentDidMount() {
      const numbers = new Array(this.props.numberCount)
        .fill('item')
        .map((_item, idx) => ++idx)
        .map((number) => {
          return (
            <div key={number} className={`table__${className}-number`}>
              {number}
            </div>
          );
        });

      this.setState({ numbers });
    }

    render() {
      return <WrappedComponent {...this.props} numbers={this.state.numbers} />;
    }
  };
}

export default ArrayOfNumber;
