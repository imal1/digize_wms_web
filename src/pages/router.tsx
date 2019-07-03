/**
 * @Author: chenzj
 * @Date:   2019-07-02 10:32:31
 * @Last modified by:   chenzj
 * @Last modified time: 2019-07-03 10:46:03
 */

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
