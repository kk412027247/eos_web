export default (state={}, action)=>{
  switch (action.type){
    case 'HANDLE_BLOCK_CHAIN_INFO':{
      return{
        ...state,
        blockChainInfo: action.blockChainInfo
      }
    }

    case 'HANDLE_RESENT_BLOCK':{
      return{
        ...state,
        recentBlocks:action.recentBlocks
      }
    }

    case 'HANDLE_DETAIL_BLOCK_INFO':{
      return {
        ...state,
        detailBlockInfo: action.detailBlockInfo
      }
    }

    case 'HANDLE_USER_INFO':{
      return{
        ...state,
        userInfo: action.userInfo
      }
    }

    case 'HANDLE_TRANSACTION_DETAIL':{
      return {
        ...state,
        transactionDetail:action.transactionDetail,
      }
    }

    default: return state;
  }
}
