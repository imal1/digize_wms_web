import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import Login from "./login";
const createHashHistory = require('history').createHashHistory;

export const history = createHashHistory();

const App = () => (
  <Router history={createHashHistory()}>
    <Route path="/" component={Login} />
  </Router>
);

export default App;
