import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleDetailBlockInfo} from '../../actions/dashboardAction';
import {handleNav} from '../../actions/navAction'
import './blockDetail.css';

class BlockDetail extends React.Component{

  componentWillMount(){
    const {match, handleDetailBlockInfo} = this.props;
    handleDetailBlockInfo(match.params.blockNumber)
  }

  render(){
    const {detailBlockInfo, handleNav} = this.props;
    return(
      <div id={'block-detail'}>
        <br/>
        <h2>区块详情</h2>
        <p className={'label'}>Block Number:</p> <p>{detailBlockInfo.block_num}</p>
        <br/>
        <p className={'label'}>Block Producer:</p>
        <p
          className={'click'}
          onClick={handleNav.bind(null, '/userDetail/'+detailBlockInfo.producer)}
        >
          {detailBlockInfo.producer}
        </p>
        <br/>
        <p className={'label'}>时间戳:</p> <p>{new Date(detailBlockInfo.timestamp + 'Z').toLocaleString()}</p>
        <br/>
        <p className={'label'}>Block ID:</p> <p>{detailBlockInfo.id}</p>
        <br/>
        <p className={'label'}>Previous Block ID:</p> <p>{detailBlockInfo.previous}</p>
        <br/>
        <p className={'label'}>Transaction Merkle Root:</p> <p>{detailBlockInfo.transaction_mroot}</p>
        <br/>
        <p className={'label'}>Action Merkle Root Root:</p> <p>{detailBlockInfo.action_mroot}</p>
        <br/>
        <p className={'label'}>Number of Transactions:</p> <p>{detailBlockInfo.transactions.length}</p>
        <br/>
        <div id={'transaction'}>
          <h2>交易</h2>
          <p className={'index'}>Index</p>
          <p className={'id'}>Transaction ID</p>
          <p className={'status'}>Status</p>
          <p className={'cpu'}>CPU Usage</p>
          <p className={'net'}>NET Usage</p>
          <p className={'length'}>Actions</p>
          {
            detailBlockInfo.transactions.map((item,index)=>{
              const id = !!item.trx.id ? item.trx.id : item.trx;
              return(
                <div key={id}>
                  <p className={'index'}>{index + 1}</p>
                  <p
                    className={'id click'}
                    onClick={handleNav.bind(null,'/transaction/'+id)}
                  >
                    { id }
                  </p>
                  <p className={'status'}>{item.status}</p>
                  <p className={'cpu'}>{item.cpu_usage_us}</p>
                  <p className={'net'}>{item.net_usage_words}</p>
                  <p className={'length'}>{!!item.trx.id ? item.trx.transaction.actions.length : '0'}</p>
                </div>
              )
            })
          }
        </div>
        </div>

    )
  }
}

const mapStateToProps = state => ({
  detailBlockInfo: state.dashboardReducer.detailBlockInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({handleDetailBlockInfo,handleNav}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlockDetail);
