import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';
import createBrowserHistory from 'history/createBrowserHistory';
const baseNode = document.getElementsByTagName('base')[0];
const baseUrl = baseNode && baseNode.getAttribute('href');
const history = createBrowserHistory({
    basename: baseUrl
});

ReactDOM.render(
  <Provider store={Store}>
    <Layout history={history} />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
