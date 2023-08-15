import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// The following line can be included in your src/index.js or App.js file
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers';
import ZApp from './app/ZApp';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><ZApp/></Provider>,
  document.getElementById('root')
);
