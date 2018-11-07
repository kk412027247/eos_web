export default (state={}, action)=>{
  switch( action.type){
    case 'HANDLE_VOTE_LIST':{
      return {
        ...state,
        producerList: action.producerList
      }
    }

    case 'HANDLE_VOTE_RATE':{
      return{
        ...state,
        voteRate: action.voteRate
      }
    }

    case 'HANDLE_EOS_SUPPLY':{
      return{
        ...state,
        eosSupply: action.eosSupply
      }
    }

    case 'HANDLE_TOTAL_ACTIVATED_STAKE':{
      return{
        ...state,
        totalActivatedStake: action.totalActivatedStake
      }
    }

    case 'HANDLE_TOTAL_PRODUCER_VOTE_WEIGHT':{
      return{
        ...state,
        totalProducerVoteWeight: action.totalProducerVoteWeight
      }
    }

    default : return state
  }
}
