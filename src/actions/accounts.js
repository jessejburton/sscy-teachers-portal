import database from '../firebase/firebase';

// ADD_ACCOUNT
export const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account
});

export const startAddAccount = (accountData = {}) => {
  return (dispatch) => {
    const {
      firstName = '',
      lastName = '',
      email = '',
      classCost = '',
      bio = ''
    } = accountData;
    const account = { firstName, lastName, email, classCost, bio };

    return database
      .ref('accounts')
      .push(account)
      .then((ref) => {
        dispatch(
          addAccount({
            id: ref.key,
            ...account
          })
        );
      });
  };
};

// REMOVE_ACCOUNT
export const removeAccount = ({ id } = {}) => ({
  type: 'REMOVE_ACCOUNT',
  id
});

export const startRemoveAccount = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`accounts/${id}`)
      .remove()
      .then(() => {
        dispatch(removeAccount({ id }));
      });
  };
};

// EDIT_ACCOUNT
export const editAccount = (id, updates) => ({
  type: 'EDIT_ACCOUNT',
  id,
  updates
});

export const startEditAccount = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`accounts/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editAccount(id, updates));
      });
  };
};

// SET_ACCOUNTS
export const setAccounts = (accounts) => ({
  type: 'SET_ACCOUNTS',
  accounts
});

export const startSetAccounts = () => {
  return (dispatch) => {
    return database
      .ref('accounts')
      .once('value')
      .then((snapshot) => {
        const accounts = [];

        snapshot.forEach((childSnapshot) => {
          accounts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setAccounts(accounts));
      });
  };
};
