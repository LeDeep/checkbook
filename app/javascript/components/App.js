import React, {Component} from "react";
import AccountSummary from './checkbook/account-summary';
import Header from './checkbook/header';
import TableHeader from './checkbook/table-header';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      transactions:[]
    };
  }

  componentDidMount() {
    fetch('/api/v1/transactions.json').then(response => response.json())
    .then((data) => {this.setState({transactions:data})});
  };

  render () {
    return (
      <div>
        <Header />
        <TableHeader />
        <AccountSummary transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
