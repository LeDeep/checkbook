import React, { Component } from 'react';

class Balance extends Component {
  render(){
    return (
      <div>
        <h3>Balance</h3>
        <p>
        {this.props.transactions.reduce((total, transaction) => {
          if(transaction.transaction_type === 'debit') {
            return total - transaction.amount.toFixed(2)
          } else if (transaction.transaction_type === 'credit') {
            return total + transaction.amount
          }
        }, 0)}
        </p>
      </div>
    )
  }
}

export default Balance
