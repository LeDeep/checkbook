import React, { Component } from 'react';
import '../../../assets/stylesheets/checkbook.css';

class Transaction extends Component {
  render() {
    return(
      <table>
        <tbody>
          <tr>
            <td>{this.props.date}</td>
            <td>{this.props.debit}</td>
            <td>{this.props.credit}</td>
            <td>{this.props.description}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Transaction
