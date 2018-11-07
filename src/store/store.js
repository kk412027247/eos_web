import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import generalReducer from '../reducer/generalReducer';
import registerReducer from '../reducer/registerReducer';
import transactionReducer from '../reducer/transactionReducer';
import historyReducer from '../reducer/historyReducer';
import dashboardReducer from '../reducer/dashboardReducer';
import producerReducer from '../reducer/producerReducer';
import headerReducer from '../reducer/headerReducer';

export const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];
const reducer = combineReducers({
  generalReducer,
  registerReducer,
  transactionReducer,
  historyReducer,
  dashboardReducer,
  producerReducer,
  headerReducer,
});

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
    balance:[],
  },
  dashboardReducer:{
    blockChainInfo:{},
    recentBlocks:[],
    detailBlockInfo:{
      transactions:[],
      timestamp:'1970-01-01'
    },
    userInfo:{
      permissions:[{
          required_auth:{
            keys:[{
              key:'1'
            }]
          }
      }],
    },
    transactionDetail:{
      last_irreversible_block:0,
      block_num:0,
      trx:{
        receipt:{
          status:'',
          cpu_usage_us:0,
          net_usage_words:0,
        },
      }
    },

  },
  producerReducer:{
    producerList:[],
    voteRate:0,
    eosSupply:0,
    totalActivatedStake:0,
    totalProducerVoteWeight:1,
  },
  headerReducer:{
    searchInput:'',
  }
};

export default  createStore(
  connectRouter(history)(reducer),
  initState,
  applyMiddleware(...middleware)
)

