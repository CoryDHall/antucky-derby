import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { antStatsStore } from './redux/store';
import { ApolloProvider } from "react-apollo";
import { makeClient } from './apollo/client';
import { ANT_DATA_ENDPOINT } from './constants';

const antStatsClient = makeClient(ANT_DATA_ENDPOINT)

ReactDOM.render((
  <ApolloProvider client={ antStatsClient }>
    <Provider store={ antStatsStore }>
      <App/>
    </Provider>
  </ApolloProvider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
