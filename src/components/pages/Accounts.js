import React from 'react';
import AccountList from '../partials/AccountList';

export class Accounts extends React.Component {
  render() {
    return (
      <div>
        <h1>Accounts</h1>
        <AccountList />
      </div>
    );
  }
}

export default Accounts;
