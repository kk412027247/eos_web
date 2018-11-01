import {rpc} from '../wallet/wallet';


export const getHistory = () => (
  async (dispatch, getState)=>{
    dispatch(getBalance());
    const username = getState().registerReducer.username;
    const myHistory = getState().historyReducer.history;
    // 取历史，默认只取最后20条，这里先默认取1000条把
    const actionHistory = await rpc.history_get_actions(username,0,1000);
    // console.log(actionHistory);
    const history = actionHistory
      .actions
      .filter(item=>item.action_trace.receipt.receiver === username)
      .map(item=>{
        const global_action_seq = item.global_action_seq;
        const {account, name} = item.action_trace.act;
        const {from, memo, quantity, to} = item.action_trace.act.data;
        const {block_time} = item.action_trace;
        return {account, name, from, to, quantity, memo, block_time:new Date(block_time+'Z').toLocaleString(), global_action_seq}
      })
      .reverse();

    // 只有在两条历史不一致的时候才更新历史
    if( !!myHistory[0] && !!history[0] && myHistory[0].global_action_seq === history[0].global_action_seq){
      return
    }

    dispatch({
      type:'HANDLE_HISTORY',
      history,
    });

  }
);


export const getBalance = () => async (dispatch, getState) => {
  const {username} = getState().registerReducer;

  const balance = await rpc.get_currency_balance('eosio.token', username);
  dispatch({
    type:'HANDLE_BALANCE',
    balance
  });
};
