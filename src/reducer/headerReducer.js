export default (state={}, action)=>{
  switch (action.type) {
    case 'HANDLE_SEARCH_INPUT':{
      return{
        ...state,
        searchInput: action.searchInput
      }
    }
    default : return state;
  }
}
