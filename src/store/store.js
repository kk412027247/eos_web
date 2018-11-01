import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import generalReducer from '../reducer/generalReducer';
import registerReducer from '../reducer/registerReducer';
import transactionReducer from '../reducer/transactionReducer';
import historyReducer from '../reducer/historyReducer';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const reducer = combineReducers({generalReducer, registerReducer, transactionReducer, historyReducer});

const privateKey = localStorage.getItem('privateKey');
const username = localStorage.getItem('username');

const initState ={
  generalReducer: {

  },
  registerReducer: {
    username: !!username ? username : '',
    password:'',
    privateKey: !!privateKey ? privateKey : '',
    newUsername:'',
    newPassword:'',
  },
  transactionReducer:{
    receiverUsername:'',
    amount:'0',
    memo:'',
  },
  historyReducer:{
    history:[],
  }
};

export default  createStore(
  connectRouter(history)(reducer),
  initState,
  applyMiddleware(...middleware)
)

