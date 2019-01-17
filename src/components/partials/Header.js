import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <ul className="header__navigation">
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
      <li><NavLink to="/classes" activeClassName="is-active">Classes</NavLink></li>
      <li><NavLink to="/registration" activeClassName="is-active">Registration</NavLink></li>
      <li><NavLink to="/reports" activeClassName="is-active">Reports</NavLink></li>
      <li><NavLink to="/accounts" activeClassName="is-active">Accounts</NavLink></li>
    </ul>
  </header>
);

export default Header;
