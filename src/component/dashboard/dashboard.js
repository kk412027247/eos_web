import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleBlockChainInfo} from '../../actions/dashboardAction';
import {handleNav} from '../../actions/navAction';
import './dashboard.css'

class dashboard extends React.Component {

  componentDidMount(){
    this.props.handleBlockChainInfo();
    this.timer = setInterval(this.props.handleBlockChainInfo, 5000)
  }

  componentWillUnmount(){
    !!this.timer && clearInterval(this.timer);
  }

  render(){
    const {blockChainInfo, recentBlocks, handleNav} = this.props;
    return(
      <div id={'dashboard'}>
        <br/>
        <h2>区块链信息</h2>
        <div>
          <p className={'label'}>Server Version :</p>
          <p>{blockChainInfo.server_version_string}</p>
        </div>
        <div>
          <p className={'label'}>Chain ID :</p>
          <p>{blockChainInfo.chain_id}</p>
        </div>
        <div>
          <p className={'label'}>Head Block :</p>
          <p
            className={'click'}
            onClick={handleNav.bind(null,'/blockDetail/'+blockChainInfo.head_block_num )}
          >
            {blockChainInfo.head_block_num}
          </p>
        </div>
        <div>
          <p className={'label'}>Head Block Producer :</p>
          <p
            className={'click'}
            onClick={handleNav.bind(null, '/userDetail/'+blockChainInfo.head_block_producer)}
          >
            {blockChainInfo.head_block_producer}
          </p>
        </div>
        <div>
          <p className={'label'}>Last Irreversible Block :</p>
          <p
            className={'click'}
            onClick={handleNav.bind(null,'/blockDetail/'+blockChainInfo.last_irreversible_block_id )}
          >
            {blockChainInfo.last_irreversible_block_id}
          </p>
        </div>


        <h2>最近区块信息</h2>
        <p className={'block-num'}>Block Number</p>
        <p className={'time'}>时间戳</p>
        <p className={'producer'}>生产者</p>
        <p className={'actions2'}>交易数量</p>

        {
          recentBlocks.map(item=>(
            <div
              key={item.block_num}
              className={'block-info'}
            >
              <p
                className={'block-num click'}
                onClick={handleNav.bind(null,'/blockDetail/'+item.block_num )}
              >
                {item.block_num}
              </p>
              <p className={'time'}>{new Date(item.timestamp+'Z').toLocaleString()}</p>
              <p
                className={'producer click'}
                onClick={handleNav.bind(null, '/userDetail/'+item.producer)}
              >
                {item.producer}
              </p>
              <p className={'actions2'}>{item.transactions.length}</p>
            </div>
          ))
        }
        <h2>最近交易信息</h2>

        <p className={'id'}>Transaction ID</p>
        <p className={'block-number'}>Block Number</p>
        <p className={'cpu'}>CPU Usage</p>
        <p className={'net'}>NET Usage</p>
        <p className={'actions'}>Actions</p>
        {
          recentBlocks.reduce((pre,cur)=>{
            const transactions = cur.transactions.map(item=>({...item, block_num: cur.block_num}));
            return[...pre, ...transactions]
          },[]).slice(0,50).map(item=> {
            const id = item.trx.id ? item.trx.id : item.trx;
            return(
              <div
                key={id}
                className={'transaction-item'}
              >
                <p
                  className={'id click'}
                  onClick={handleNav.bind(null, `/transaction/${id}`)}
                >
                  {id}
                </p>
                <p
                  className={'block-number click'}
                  onClick={handleNav.bind(null, `/blockDetail/${item.block_num}`)}
                >
                  {item.block_num}
                </p>
                <p className={'cpu'}>{item.cpu_usage_us}</p>
                <p className={'net'}>{item.net_usage_words}</p>
                <p className={'actions'}>{!!item.trx.transaction? item.trx.transaction.actions.length : 0}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const{blockChainInfo, recentBlocks} = state.dashboardReducer;
  return{blockChainInfo, recentBlocks}
};

const mapDispatchToProps = dispatch => bindActionCreators({handleBlockChainInfo ,handleNav}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
