import React, { Component } from 'react';
import Transaction from './transaction';

class TransactionSummary extends Component {
  render(){
    return this.props.transactions.map((transaction,index) => (
      <Transaction
        key={index}
        {...transaction}
      />
    ))
  }
}

export default TransactionSummary
