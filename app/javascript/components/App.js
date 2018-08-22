import React, {Component} from "react";
import AccountSummary from './checkbook/account-summary';
import Header from './checkbook/header';
import TableHeader from './checkbook/table-header';

var transactionData = [
  {date: '04-04-2018', debit: -9, credit: 0, description: 'lunch'},
  {date: '05-05-2018', debit: 0, credit: 5000, description: 'cash check'},
  {date: '06-06-2018', debit: 0, credit: 172, description: 'refund'},
  {date: '07-07-2018', debit: -111, credit: 0, description: 'groceries'},
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
        <Header />
        <TableHeader />
        <AccountSummary transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
