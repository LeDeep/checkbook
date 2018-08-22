import React, {Component} from "react";
import TransactionSummary from './checkbook/transaction-summary';

var transactionData = [
  {date: '04-04-2018', amount: -9, description: 'lunch'},
  {date: '05-05-2018', amount: 5000, description: 'cash check'},
  {date: '06-06-2018', amount: 172, description: 'refund'},
  {date: '07-07-2018', amount: -111, description: 'groceries'},
]

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      transactions:[]
    };
  }

  componentDidMount() {
    this.setState({
      transactions: transactionData,
    });
  };

  render () {
    return (
      <div>
        <h1>My Checkbook</h1>
          <TransactionSummary transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
