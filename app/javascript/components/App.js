import React, {Component} from "react";
import AccountSummary from './checkbook/account-summary';
import AddTransaction from './checkbook/add-transaction';
import Header from './checkbook/presentation/header';
import TableHeader from './checkbook/presentation/table-header';
import Balance from './checkbook/balance';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      transactions:[],
      total: 0
    };

    this.handleNewEntry = this.handleNewEntry.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      transactions: this.state.transactions.concat(transaction),
      total: this.state.transactions.reduce((a,b) => {
        return a + b.amount;
      }, 0)
    })
  }

  handleUpdate = (transaction) => {
    fetch('api/v1/transactions/' + transaction.id, {
      method: 'PUT',
      body: JSON.stringify({transaction}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.updateTransaction(transaction)
    })
  }

  updateTransaction = (transaction) => {
    fetch('/api/v1/transactions.json').then(resp => resp.json()).then(data => {
      this.setState({transactions:data})
    })
  }

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      fetch('api/v1/transactions/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.removeTransaction(id)
        alert('Transaction has been deleted and your balance has been updated.')
      })
    }
  }

  removeTransaction = (id) => {
    var newTransactions;
    newTransactions = this.state.transactions.filter((transaction) => {
      return transaction.id !== id;
    });
    this.setState({transactions: newTransactions});
  }

  render () {
    return (
      <div>
        <Header />
        <Balance transactions={this.state.transactions}/>
        <AddTransaction handleNewEntry={this.handleNewEntry} />
        <TableHeader />
        <AccountSummary transactions={this.state.transactions} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
