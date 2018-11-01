export default (state={}, action)=>{
  switch(action.type){
    case 'HANDLE_HISTORY':{
      return {
        ...state,
        history: action.history
      }
    }

    case 'HANDLE_BALANCE' :{
      return{
        ...state,
        balance: action.balance
      }
    }


    default: return state;

  }

}
