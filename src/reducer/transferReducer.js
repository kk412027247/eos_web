export default (state={}, action)=>{
  switch (action.type) {
    case 'HANDLE_RECEIVE_USERNAME' :{
      return{
        ...state,
        receiverUsername: action.receiverUsername
      }
    }

    default: return state;
  }

}
