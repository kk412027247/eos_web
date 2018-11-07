import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleTransactionDetail} from '../../actions/dashboardAction';
import './transaction.css';


class Transaction extends React.Component {
  componentDidMount(){
    const {handleTransactionDetail, match} = this.props;
    handleTransactionDetail(match.params.id);
  }

  render(){
    const {transactionDetail} = this.props;
    // console.log(transactionDetail)
    return(
      <div id={'transaction'}>
        <br/>
        <h2>交易详情</h2>
        <p className={'label'}>Transaction ID:</p><p>{transactionDetail.id}</p>
        <br/>
        <p className={'label'}>Block Number:</p><p>{transactionDetail.block_num}</p>
        <br/>
        <p className={'label'}>时间戳:</p><p>{new Date(transactionDetail.block_time + 'Z').toLocaleString()}</p>
        <br/>
        <p className={'label'}>Irreversible:</p>
        <p>
          {
            transactionDetail.last_irreversible_block >= transactionDetail.block_num
            ? 'true'
            : 'false'
          }
        </p>
        <br/>
        <p className={'label'}>Status:</p><p>{transactionDetail.trx.receipt.status}</p>
        <br/>
        <p className={'label'}>CPU Usage:</p><p>{transactionDetail.trx.receipt.cpu_usage_us} µs</p>
        <br/>
        <p className={'label'}>NET Usage:</p><p>{transactionDetail.trx.receipt.net_usage_words/1000} KB</p>
        <br/>

        <p className={'label'}>Number of Actions:</p><p>{
        transactionDetail.trx.trx
        ? transactionDetail.trx.trx.actions.length
        : 0
      }</p>

        <h2>Actions</h2>
        <p className={'index title'}>Index</p>
        <p className={'account title'}>账户</p>
        <p className={'authorization title'}>Authorizations</p>
        <p className={'name title'}>action</p>
        <br/>
        {
          transactionDetail.trx.trx
          ? transactionDetail.trx.trx.actions.map((item, index)=>(
            <div key={index}>
              <p className={'index'}>{index + 1}</p>
              <p className={'account'}>{item.account}</p>
              <p className={'authorization'}>{item.authorization[0] ? item.authorization[0].actor : ''}</p>
              <p className={'name'}>{item.name}</p>
            </div>
            ),[])
          : ''
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  transactionDetail: state.dashboardReducer.transactionDetail
});

const mapDispatchToProps = dispatch => bindActionCreators({handleTransactionDetail},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
