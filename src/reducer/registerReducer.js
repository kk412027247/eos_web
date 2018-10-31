export default (state={}, action)=>{
  switch (action.type){
    case 'HANDLE_USERNAME':{
      return {
        ...state,
        username: action.username
      }
    }

    case 'HANDLE_PASSWORD':{
      return {
        ...state,
        password: action.password
      }
    }

    case 'HANDLE_PRIVATE_KEY':{
      return {
        ...state,
        privateKey: action.privateKey,
      }
    }

    default: return state
  }
}
