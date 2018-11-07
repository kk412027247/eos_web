import {rpc} from '../wallet/wallet';
import {handleNav} from './navAction';

export const handleSearchInput = searchInput => ({
  type:'HANDLE_SEARCH_INPUT',
  searchInput: searchInput.target.value,
});

export const handleKeyDown = event => dispatch => {
  if(event.keyCode === 13){
    dispatch(handleSearch())
  }
};


export const handleSearch = () => async (dispatch, getState) => {
  const searchInput = getState().headerReducer.searchInput;


  try{
    await rpc.get_account(searchInput);
    dispatch(handleNav('/userDetail/'+searchInput));
    return;
  }catch(err){
    // console.log(err)
  }

  try{
    await rpc.get_block(searchInput);
    dispatch(handleNav('/blockDetail/'+searchInput));
    return;
  }catch(err){
    // console.log(err)
  }

  try{
    await rpc.history_get_transaction(searchInput);
    dispatch(handleNav('/transaction/'+searchInput));
    return;
  }catch(err){
    // console.log(err)
  }


  alert(`没找到${searchInput}相关的 用户名/区块/交易id`)



};
