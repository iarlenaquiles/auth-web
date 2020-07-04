import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import ResetPassword from '../pages/ResetPassword';
import ChangePassword from '../pages/ChangePassword';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/reset/password" component={ResetPassword}  />
      <Route path="/auth/reset_password" component={ChangePassword}  />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/users/create" component={User} isPrivate />
      <Route path="/users/edit/:id" component={User} isPrivate />
    </Switch>
  );
}
