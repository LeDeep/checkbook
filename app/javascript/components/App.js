import React, {Component} from "react";
import AccountSummary from './checkbook/account-summary';
import AddTransaction from './checkbook/add-transaction';
import Header from './checkbook/presentation/header';
import TableHeader from './checkbook/presentation/table-header';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      transactions:[]
    };

    this.handleNewEntry = this.handleNewEntry.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/transactions.json').then(response => response.json())
    .then((data) => {this.setState({transactions:data})});
  };

  handleNewEntry = (transaction) => {
  fetch('/api/v1/transactions', {
    method: 'POST',
    body: JSON.stringify({transaction}),
    headers: {
      'Content-Type': 'application/json'
    }
    }).then(response => response.json())
    .then(data => {
      this.addNewTransaction(data)
    })
  }

  addNewTransaction = (transaction) => {
    this.setState({
      transactions: this.state.transactions.concat(transaction)
    })
  }

  render () {
    return (
      <div>
        <Header />
        <AddTransaction handleNewEntry={this.handleNewEntry} />
        <TableHeader />
        <AccountSummary transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
