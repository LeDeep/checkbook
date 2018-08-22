import React, { Component } from 'react';

class TableHeader extends Component {
  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TableHeader
