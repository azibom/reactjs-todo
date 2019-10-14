import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for w

const persistConfig = {
    key: 'key',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeWithDevTools())
let persistor = persistStore(store);

const Root = ({ store }) => (
<Provider store={store}>
    <Router>
    <Route path="/v" component={App} />
    <Route path="/a" component={App} />
    <Route exact path="/" component={App} />
    </Router>
</Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
serviceWorker.unregister();
