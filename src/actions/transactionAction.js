import {rpc, wallet} from "../wallet/wallet";

export const handleReceiverUsername = receiverUsername =>  ({
  type:'HANDLE_RECEIVE_USERNAME',
  receiverUsername: receiverUsername.target.value,
});

export const handleAmount = amount => ({
  type:'HANDLE_AMOUNT',
  amount: amount.target.value,
});

export const handleMemo = memo => ({
  type:'HANDLE_MEMO',
  memo: memo.target.value,
});

export const handleTransfer = () => async (dispatch, getState) => {

  const {receiverUsername, amount, memo} = getState().transactionReducer;
  const {username, privateKey} = getState().registerReducer;

  if(!privateKey){
    alert('要先登录啊，人才！');
    return;
  }


  if (!receiverUsername) {
    alert('用户名都没有，转个毛线');
    return
  }

  if(!Number(amount)){
    alert('输入的啥金额？？')  ;
    return
  }

  try{
    await rpc.get_account(receiverUsername)
  }catch(e){
    alert('妹有这个用户');
    return;
  }

  // tmd111111111  tmdqqqqqqqqq 用户存在


  try{
    await wallet.api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: username,
          permission: 'active',
        }],
        data: {
          from: username,
          to: receiverUsername,
          quantity: Number(amount).toFixed(4)+' EOS',
          memo: memo,
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });

    alert('转账成功')
  }catch(e){
    console.log(e);
    alert('转账失败')
  }
};


