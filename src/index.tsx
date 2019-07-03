/**
 * @Author: chenzj
 * @Date:   2019-07-02 10:32:31
 * @Last modified by:   chenzj
 * @Last modified time: 2019-07-03 10:46:25
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
