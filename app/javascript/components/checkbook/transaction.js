import React, { Component } from 'react';
import '../../../assets/stylesheets/checkbook.css';

class Transaction extends Component {
  render() {
    if(this.props.transaction_type === 'credit') {
    return(
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
    )
  } else if(this.props.transaction_type === 'debit') {
    return(
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
  }
 }

}

export default Transaction
