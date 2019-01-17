import React from 'react';
import AccountForm from '../forms/AccountForm';
import { connect } from 'react-redux';
import { startAddAccount } from '../../actions/accounts';

export class AddAccount extends React.Component {
  onSubmit = (account) => {
    this.props.startAddAccount(account);
    this.props.history.push('/accounts');
  };
  render() {
    return (
      <div>
        <h1>Add Account</h1>
        <AccountForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddAccount: (account) => dispatch(startAddAccount(account))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddAccount);
