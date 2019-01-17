import React from 'react';
import { Link } from 'react-router-dom';

const AccountListRow = ({ firstName, lastName, email, id }) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>
        <Link to={`/account/${id}`}>edit</Link>
    </td>
  </tr>
);

export default AccountListRow;
