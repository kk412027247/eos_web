export default (state={}, action) => {
  switch (action.type) {
    case 'GENERAL':{
      return {
        ...state,
      }
    }
    default: return state;
  }
}
