import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import ReactDOMClient from 'react-dom/client';
// @ts-ignore
import { Provider } from 'react-redux';
import { history } from './utils';
import App from './App';
import { store } from './app/store';
import 'antd/dist/reset.css';
import './index.css';

// @ts-ignore
const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>123</div>}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
