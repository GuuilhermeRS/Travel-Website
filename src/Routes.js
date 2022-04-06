import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Destination from './components/Destination';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/destination" component={Destination} />
    </Switch>
  )
}

