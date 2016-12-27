import React, { Component, PropTypes } from 'react';
import jQuery from 'jquery'
import $ from 'jquery'
import OperationList from '../components/OperationList.jsx';

class OperationContainer extends Component {

  constructor() {
    super();
    this.state = { operations: [] }
  }

  componentDidMount() {
    this.loadOperationsFromAjax();
  }

  loadOperationsFromAjax() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type : 'GET',
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
      success: function(operations) {
        this.setState({operations: operations});
      }.bind(this),
    });
  }

  render() {
    return (
      <div>
        <OperationList operations={this.state.operations}/>
      </div>
    );
  }
}

OperationContainer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default OperationContainer;
