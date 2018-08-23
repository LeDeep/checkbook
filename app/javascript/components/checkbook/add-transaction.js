import React, { Component } from 'react';
import '../../../assets/stylesheets/checkbook.css';
import Button from './presentation/button';


class AddTransaction extends Component {
  constructor() {
    super()
    this.state = {
      transaction_type: '',
      transaction_date: '',
      amount: '',
      description: ''
    }
    this.addEntry = this.addEntry.bind(this);
    this.handleTransactionType = this.handleTransactionType.bind(this)
    this.handleTransactionDate = this.handleTransactionDate.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
  }

  handleTransactionType = (e) => {
    this.setState({
      transaction_type: e.target.value
    });
  }

  handleTransactionDate = (e) => {
    this.setState({
      transaction_date: e.target.value
    }); }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value
    });
  }

  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  addEntry = () => {
    let transaction = {transaction_date: this.state.transaction_date, transaction_type: this.state.transaction_type, amount: this.state.amount, description: this.state.description}
    if(this.state.transaction_type && this.state.transaction_date && this.state.amount && this.state.description) {
      this.props.handleNewEntry(transaction)
    }
  }

  render(){
    return (
      <div>
      <h3>Enter transactions</h3>
        <select className="entry-form" value={this.state.transaction_type} onChange={this.handleTransactionType}>
          <option value="" disabled>Select transaction type</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <input className="entry-form" type="date" value={this.state.transaction_date} onChange={this.handleTransactionDate} placeholder='date' />
        <input className="entry-form" type="number" value={this.state.amount} onChange={this.handleAmount} placeholder='amount' />
        <input className="entry-form" type="text" value={this.state.description} onChange={this.handleDescription} placeholder='description'/>
        <Button onClick={this.addEntry}>Add</Button>
      </div>
    )
  }
}

export default AddTransaction
