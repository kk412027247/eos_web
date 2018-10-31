import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHistory} from '../../actions/historyAction'
import  Button from '@material-ui/core/Button';

class Page1 extends React.Component {
  componentWillMount(){
    this.props.getHistory();
  }

  render(){
    const {getHistory} = this.props;
    return(
      <div>

        <Button
          variant="contained"
          onClick={getHistory}
          color="primary"
        >
          获取历史信息
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({getHistory}, dispatch);



export default connect(null, mapDispatchToProps)(Page1);
