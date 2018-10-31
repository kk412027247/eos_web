import React from 'react';
import {connect} from 'react-redux';


class Page2 extends React.Component {

  componentDidMount(){
    console.log(this.props.privateKey)
  }

  render(){
    // const {privateKey} = this.props;
    return(
      <div>

        转账
      </div>
    )
  }
}

const mapStateToProps = state =>({
  privateKey: state.registerReducer.privateKey
});

export default connect(mapStateToProps)(Page2);
