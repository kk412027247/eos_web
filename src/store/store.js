import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import generalReducer from '../reducer/generalReducer';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const reducer = combineReducers({generalReducer});

const initState ={
  generalReducer:{

  }
};

export default  createStore(
  connectRouter(history)(reducer),
  initState,
  applyMiddleware(...middleware)
)

