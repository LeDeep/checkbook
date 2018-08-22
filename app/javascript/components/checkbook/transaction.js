import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    return(
      <div>
        <p>{this.props.date} {this.props.amount} {this.props.description}</p>
        <br></br>
      </div>
    )
  }
}

export default Transaction
