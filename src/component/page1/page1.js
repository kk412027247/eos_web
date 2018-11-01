import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHistory} from '../../actions/historyAction'
import  Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './page1.css';

class Page1 extends React.Component {
  componentWillMount(){
    this.props.getHistory();
  }

  render(){
    const {getHistory, history} = this.props;
    return(
      <div>

        <Button
          variant="contained"
          onClick={getHistory}
          color="primary"
        >
          刷新历史信息
        </Button>
        <br/>
        {
          history.map(item=>
            <Card
              id={'list-item'}
              key={item.global_action_seq}
            >
              <strong>合约名: </strong> {item.account} |&nbsp;
              <strong>操作: </strong> {item.name} |&nbsp;
              <strong>发送方: </strong> {item.from} |&nbsp;
              <strong>接收方: </strong> {item.to} |&nbsp;
              <strong>金额: </strong> {item.quantity} |&nbsp;
              <strong>备注: </strong> {item.memo} |&nbsp;
              <strong>时间: </strong> {item.block_time}
            </Card>
          )
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({history: state.historyReducer.history});

const mapDispatchToProps = dispatch => bindActionCreators({getHistory}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
