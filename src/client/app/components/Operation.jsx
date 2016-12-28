import React, { Component, PropTypes } from 'react';

class Operation extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.operation.name}</td>
        <td>{this.props.operation.amount}</td>
        <td>{this.props.operation.frequency}</td>
        <td>{this.props.operation.type}</td>
      </tr>
    );
  }
}

Operation.propTypes = {
  operation: PropTypes.object.isRequired,
};

export default Operation;
