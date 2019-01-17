import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/partials/Header';
import Dashboard from '../components/pages/Dashboard';
import Classes from '../components/pages/Classes';
import Registration from '../components/pages/Registration';
import Reports from '../components/pages/Reports';
import Accounts from '../components/pages/Accounts';
import AddAccount from '../components/pages/AddAccount';
import EditAccount from '../components/pages/EditAccount';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/classes" component={Classes} />
        <Route path="/registration" component={Registration} />
        <Route path="/reports" component={Reports} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/account" component={AddAccount} exact={true} />
        <Route path="/account/:id" component={EditAccount} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
