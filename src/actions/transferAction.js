import {rpc, api} from "../wallet/wallet";



export const handleReceiverUsername = receiverUsername =>  ({
  type:'HANDLE_RECEIVE_USERNAME',
  receiverUsername,
});

export const handleTransfer = () => async (dispatch, getState) => {

  const receiverUsername = getState().transferReducer.receiverUsername;
  if (!receiverUsername) {
    alert('用户名都没有，转个毛线');
    return
  }

  try{
    await rpc.get_account(receiverUsername)
  }catch(e){
    alert('妹有这个用户');
    return;
  }

  try{
    await api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: 'tmd111111111',
          permission: 'active',
        }],
        data: {
          from: 'tmd111111111',
          to: 'tmdqqqqqqqqq',
          quantity: '10.1234 EOS',
          memo: '',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
  }catch(e){

  }





};

