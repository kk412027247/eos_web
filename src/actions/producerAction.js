import {rpc} from '../wallet/wallet';

export const handleProducerList = () => async dispatch => {
  const producerList = await rpc.get_table_rows({
    "json": true,
    "code": "eosio",
    "scope": "eosio",
    "table": "producers",
    "limit": 700,
    "table_key": ""
  });

  // console.log(producerList.rows.sort((a,b)=> Number(b.total_votes) - Number(a.total_votes)));

  dispatch({
    type:'HANDLE_VOTE_LIST',
    producerList: producerList.rows.sort((a,b)=> Number(b.total_votes) - Number(a.total_votes)),
  });
};

export const handleVoteRate = () => async dispatch => {

  const globalPromise = rpc.get_table_rows({
    "json": true,
    "code": "eosio",
    "scope": "eosio",
    "table": "global",
    "limit": 1
  });

  const eosCurrencyStatsPromise =  rpc.get_currency_stats('eosio.token','EOS');
  const [global, eosCurrencyStats] = await Promise.all([globalPromise, eosCurrencyStatsPromise])
  const eosSupply = eosCurrencyStats.EOS.supply.match(/\d+/)[0];
  const total_activated_stake = global.rows[0].total_activated_stake;
  const totalProducerVoteWeight = global.rows[0].total_producer_vote_weight;


  dispatch({
    type:'HANDLE_TOTAL_PRODUCER_VOTE_WEIGHT',
    totalProducerVoteWeight
  });

  dispatch({
    type:'HANDLE_TOTAL_ACTIVATED_STAKE',
    totalActivatedStake:total_activated_stake,
  });
  const voteRate = total_activated_stake / 10000 / eosSupply;

  dispatch({
    type:'HANDLE_EOS_SUPPLY',
    eosSupply,
  });

  dispatch({
    type:'HANDLE_VOTE_RATE',
    voteRate,
  });
  // console.log(voteRate);


};
