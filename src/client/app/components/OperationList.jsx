import React, { Component, PropTypes } from 'react';
import Operation from './Operation.jsx';

class OperationList extends Component {

  constructor() {
    super();
  }

  renderOperations() {
    return this.props.operations.map((operation) => (
      <Operation key={operation._id} operation={operation} />
    ));
  }

  render() {
    return (
      <div>
        <table>
          <caption>Operation list</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Period</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderOperations()}
          </tbody>
        </table>
      </div>
    );
  }
}

OperationList.propTypes = {
  operations: PropTypes.array.isRequired,
};

export default OperationList;
