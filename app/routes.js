import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { Home } from './containers/Home';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
