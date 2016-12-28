import React, { Component, PropTypes } from 'react';

class OperationTotal extends Component {

  constructor() {
    super();
  }

  roundDecimal(number) {
    return Math.round(number * 100) / 100;
  }

  calculTotalMonthly(operations) {
    let totalAmount = 0;
    operations.forEach((operation) => {
      switch (operation.frequency) {
        case "Day":
          totalAmount += operation.amount * 30.4375;
          break;
        case "Week":
          totalAmount += operation.amount * 4.34524;
          break;
        case "Month":
          totalAmount += operation.amount;
          break;
        case "Year":
          totalAmount += operation.amount / 12;
          break;
      }
    });
    return this.roundDecimal(totalAmount);
  }

  calculRemainingBudget() {
    return this.calculTotalMonthly(this.props.creditOperations) - this.calculTotalMonthly(this.props.debitOperations);
  }

  render() {
    return (
      <div>
        <p>Total Credits ({this.props.creditOperations.length}) :
          <strong> {this.calculTotalMonthly(this.props.creditOperations)} € </strong>
          <br/>
          Total Debits ({this.props.debitOperations.length}) :
          <strong> {this.calculTotalMonthly(this.props.debitOperations)} €</strong>
          <br/>
          Total Remaining : <strong> {this.calculRemainingBudget()} €</strong>
          </p>
      </div>
    );
  }
}

OperationTotal.propTypes = {
  debitOperations: PropTypes.array.isRequired,
  creditOperations: PropTypes.array.isRequired,
};

export default OperationTotal;
