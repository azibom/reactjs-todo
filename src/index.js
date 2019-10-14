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

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
