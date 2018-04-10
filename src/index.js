import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Backpack from './components/backpack';
import About from './components/about';
import * as actions from './actions';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
// import {syncHistoryWithStore} from 'react-router-redux';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const persistedState = loadState();
const store = createStoreWithMiddleware(reducers, persistedState);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home} />
         	<Route path="home" component={Home} />
        	<Route path="backpack" component={Backpack} />
          <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('task'));
