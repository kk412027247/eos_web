import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {handleAmount, handleTransfer, handleReceiverUsername ,handleMemo} from '../../actions/transactionAction';

class Page2 extends React.Component {


  render(){
    const {handleAmount, handleTransfer, handleReceiverUsername, handleMemo} = this.props;
    return(
      <div>
        <h2>转账</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          label="收款人"
          onChange={handleReceiverUsername}
          margin="normal"
          variant="outlined"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          label="金额"
          onChange={handleAmount}
          margin="normal"
          variant="outlined"
          type="number"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          label="备注"
          onChange={handleMemo}
          margin="normal"
          variant="outlined"
        />
        <br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary" onClick={handleTransfer}>
          提交
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  privateKey: state.registerReducer.privateKey
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleAmount, handleTransfer, handleReceiverUsername, handleMemo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
