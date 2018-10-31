import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import generalReducer from '../reducer/generalReducer';
import registerReducer from '../reducer/registerReducer';
import transferReducer from '../reducer/transferReducer';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const reducer = combineReducers({generalReducer, registerReducer, transferReducer});

const privateKey = localStorage.getItem(`privateKey`);

const initState ={
  generalReducer: {

  },
  registerReducer: {
    username:'',
    password:'',
    privateKey: !!privateKey ? privateKey : '',
  },
  transferReducer:{
    receiverUsername:'',
  }
};

export default  createStore(
  connectRouter(history)(reducer),
  initState,
  applyMiddleware(...middleware)
)

