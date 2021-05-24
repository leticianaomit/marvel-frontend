import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Main from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);

export default Routes;
