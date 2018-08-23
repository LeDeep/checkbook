import React, { Component } from 'react';
import '../../../assets/stylesheets/checkbook.css';
import Button from './presentation/button';

class Transaction extends Component {
  constructor() {
    super()
    this.state = {
      editable: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  editableToggle = () => {
    this.setState({editable: !this.state.editable})
  }

  handleEdit = () => {
    if(this.state.editable) {
      let id = this.props.id
      let transaction_date = this.transaction_date.value
      let transaction_type = this.transaction_type.value
      let amount = this.amount.value
      let description = this.description.value
      let transaction = {id: id, transaction_date: transaction_date, transaction_type: transaction_type, amount: amount, description: description}
      this.props.handleUpdate(transaction)
    }
    this.editableToggle();
  }

  render() {
    const buttonText = (
      this.state.editable ? 'Save' : 'Edit'
    )

    const showCreditTransaction = (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.transaction_date}</td>
              <td>{this.props.description}</td>
              <td></td>
              <td>{this.props.amount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

    const showDebitTransaction = (
      <table>
        <tbody>
          <tr>
            <td>{this.props.transaction_date}</td>
            <td>{this.props.description}</td>
            <td>{this.props.amount.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )

    const editTransaction = (
      <div>
        <select ref={input => this.transaction_type = input} defaultValue={this.props.transaction_type}>
          <option value="" disabled>Select transaction type</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <input  type="date" ref={input => this.transaction_date = input} defaultValue={this.props.transaction_date} />
        <input  type="text" ref={input => this.amount = input} defaultValue={this.props.amount} />
        <input  type="text" ref={input => this.description = input} defaultValue={this.props.description} />
      </div>
    )

    if(this.props.transaction_type === 'credit') {
      return(
        <div>
          {this.state.editable ? editTransaction : showCreditTransaction}
          <Button onClick={() => this.handleEdit()}>{buttonText}</Button>
        </div>
      )
    } else if(this.props.transaction_type === 'debit') {
      return(
        <div>
          {this.state.editable ? editTransaction : showDebitTransaction}
          <Button onClick={() => this.handleEdit()}>{buttonText}</Button>
        </div>
      )
    }
  }

}

export default Transaction
