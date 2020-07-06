import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import ResetPassword from '../pages/ResetPassword';
import ChangePassword from '../pages/ChangePassword';
import People from '../pages/People';
import Films from '../pages/Films';
import Planets from '../pages/Planets';
import Starships from '../pages/Starships';

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
      <Route path="/people" component={People} isPrivate />
      <Route path="/films" component={Films} isPrivate />
      <Route path="/planets" component={Planets} isPrivate />
      <Route path="/starships" component={Starships} isPrivate />
    </Switch>
  );
}
