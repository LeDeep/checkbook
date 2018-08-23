import React, { Component } from 'react';
import Transaction from './transaction';

class AccountSummary extends Component {
  render(){
    return this.props.transactions.map((transaction,index) => (
      <Transaction
        key={index}
        {...transaction}
        handleUpdate={this.props.handleUpdate}
        handleDelete={this.props.handleDelete}
      />
    ))
  }
}

export default AccountSummary
