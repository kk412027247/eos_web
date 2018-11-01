export default (state={}, action)=>{
  switch (action.type) {
    case 'HANDLE_RECEIVE_USERNAME' :{
      return{
        ...state,
        receiverUsername: action.receiverUsername
      }
    }

    case 'HANDLE_AMOUNT' :{
      return {
        ...state,
        amount: action.amount
      }
    }

    case 'HANDLE_MEMO':{
      return {
        ...state,
        memo:action.memo,
      }
    }



    default: return state;
  }

}
