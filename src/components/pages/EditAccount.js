import React from 'react';
import { connect } from 'react-redux';
import AccountForm from '../forms/AccountForm';
import { startEditAccount, startRemoveAccount } from '../../actions/accounts';

export class EditAccount extends React.Component {
  onSubmit = (account) => {
    this.props.startEditAccount(this.props.account.id, account);
    this.props.history.push('/accounts');
  };
  onRemove = () => {
    this.props.startRemoveAccount({ id: this.props.account.id });
    this.props.history.push('/accounts');
  };
  render() {
    return (
      <div>
        <h1>Edit Account</h1>
        <AccountForm account={this.props.account} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove Account</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveAccount: (data) => dispatch(startRemoveAccount(data)),
  startEditAccount: (id, account) => dispatch(startEditAccount(id, account))
});

const mapStateToProps = (state, props) => {
  return {
    account: state.accounts.find(
      (account) => account.id === props.match.params.id
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAccount);
