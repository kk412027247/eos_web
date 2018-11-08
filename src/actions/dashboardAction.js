import {rpc} from '../wallet/wallet'

export const handleBlockChainInfo = () => async dispatch =>{
  const blockChainInfo = await rpc.get_info();
  dispatch({
    type:'HANDLE_BLOCK_CHAIN_INFO',
    blockChainInfo,
  });

  const head_block_num = blockChainInfo.head_block_num;
  // 取最近五条新区块信息
  const recentBlocksPromiseList = Array(5).fill('').map((item,index)=>rpc.get_block(head_block_num - index));
  // 分步获取比较耗时，所以同时获取。
  const recentBlocks = await Promise.all(recentBlocksPromiseList);

  dispatch({
    type:'HANDLE_RESENT_BLOCK',
    recentBlocks,
  });

};



export const handleDetailBlockInfo = (blockNumber) => dispatch => {
  dispatch({
    type:'HANDLE_DETAIL_BLOCK_INFO',
    detailBlockInfo:{
      transactions:[],
      timestamp:'1970-01-01'
    },
  });

  // const _blockNumber = !!Number(blockNumber) ? blockNumber : '1';
  rpc.get_block(blockNumber).then(
    detailBlockInfo => {
      dispatch({
        type:'HANDLE_DETAIL_BLOCK_INFO',
        detailBlockInfo
      });
      // console.log(detailBlockInfo)
    }
  ).catch(
    err => {
      console.log(err);
      alert('查询区块信息出错')
    }
  )
};

export const handleUserInfo = user => dispatch => {

  // 先清理一下数据
  dispatch({
    type:'HANDLE_USER_INFO',
    userInfo:{
      permissions:[{
        required_auth:{
          keys:[{
            key:'1'
          }]
        },
        perm_name:'1',
      }],
    }
  });

  rpc.get_account(user).then(
    userInfo=>{
      dispatch({
        type:'HANDLE_USER_INFO',
        userInfo
      })
   }
  ).catch(
    err => {
      console.log(err);
      alert('查询用户信息出错')
    }
  )
};

export const handleTransactionDetail = (id) =>  (dispatch) =>{

  dispatch({
    type:'HANDLE_TRANSACTION_DETAIL',
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
  });

  rpc.history_get_transaction(id).then(
    transactionDetail=>{
      // console.log(transactionDetail);
      dispatch({
        type:'HANDLE_TRANSACTION_DETAIL',
        transactionDetail,
      })
    }
  ).catch(err=>{
    console.log(err);
    alert('查询交易id失败')
  })
};
