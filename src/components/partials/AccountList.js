import React from 'react';
import AccountListRow from './AccountListRow';
import { connect } from 'react-redux';

export const AccountList = (props) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.accounts.length === 0 ? (
        <tr><td colSpan={4}>No accounts found.</td></tr>
      ) : (
        props.accounts.map((account) => {
          return <AccountListRow key={account.id} {...account} />;
        })
      )}
    </tbody>
  </table>
);

const mapStateToProps = (state) => {
  console.log(state.accounts);
  return {
    accounts: state.accounts
  };
};

export default connect(mapStateToProps)(AccountList);