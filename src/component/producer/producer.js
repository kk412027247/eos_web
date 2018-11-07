import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleProducerList, handleVoteRate} from '../../actions/producerAction';
import './producer.css';

class Producer extends React.Component {
  componentDidMount(){
    const getInfo = () => {

      this.props.handleProducerList();
      this.props.handleVoteRate();
    };
    getInfo();
    this.timer = setInterval(getInfo, 5000);
  }

  componentWillUnmount(){
      !!this.timer && clearInterval(this.timer)
  }

  render(){
    const {producerList, voteRate, eosSupply, totalActivatedStake, totalProducerVoteWeight} = this.props;

    return(
      <div id={'producer'}>
        <h2>投票情况</h2>
        <b>投票率:</b> {Number(voteRate*100).toFixed(2)}%
        <br/>
        <b>投票数: </b>{totalActivatedStake/10000}
        <br/>
        <b> eos发行量: </b> {eosSupply}
        <br/>
        <h2>BP列表</h2>
        <div>
          <p className={'index title'}>序号</p>
          <p className={'owner title'}>用户名</p>
          <p className={'url title'}>Url</p>
          <p className={'votes'}>Votes</p>
          <p className={'rate title'}>%</p>
          <p className={'reward title'}>Daily Reward</p>
        </div>
        {
          producerList.map((item,index)=>{
            const rage = item.total_votes / totalProducerVoteWeight;
            return(
              <div key={item.owner}>
                <p className={'index'}>{index}</p>
                <p className={'owner'}>{item.owner}</p>
                <p className={'url'}>
                  <a
                    href={item.url}
                    target={'_blank'}
                  >
                    {item.url}
                  </a>
                </p>
                <p className={'votes'}>{(totalActivatedStake * rage).toFixed(0)}</p>
                <p className={'rate'}>{(rage  * 100).toFixed(2)}%</p>
                <p className={'reward'}>
                  {((index <= 21 ? 319.634703196347 : 0) + 20136.986301369863 * rage).toFixed(0)} EOS
                </p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const stateToProps = state => {
  // const {producerList, voteRate, eosSupply, totalActivatedStake} = state.producerReducer;
  return state.producerReducer;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  handleProducerList,handleVoteRate,
}, dispatch);

export default connect(stateToProps, mapDispatchToProps)(Producer);
