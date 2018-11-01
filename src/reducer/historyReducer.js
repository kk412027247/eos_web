export default (state={}, action)=>{
  switch(action.type){
    case 'HANDLE_HISTORY':{
      return {
        ...state,
        history: action.history
      }
    }

    default: return state;

  }

}
