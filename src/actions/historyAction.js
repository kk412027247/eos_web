import {rpc} from '../wallet/wallet';


export const getHistory = () => (
  async (dispatch, getState)=>{
    const history = await rpc.history_get_actions(getState().registerReducer.username);
    console.log(history)
  }
);

