import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleUserInfo} from '../../actions/dashboardAction';
import './userDetail.css';

class UserDetail extends React.Component{

  componentWillMount(){
    const {handleUserInfo, match} = this.props;
    handleUserInfo(match.params.user)
  }

  render(){
    const {userInfo} = this.props;
    return(
      <div id={'userDetail'}>
        <br/>
        <h2>用户详情</h2>

        <p>账户:</p> <p>{userInfo.account_name}</p>
        <br/>
        <p>Public Key:</p>
        <br/>

        {
          userInfo.permissions.map(item=>(
            <div key={item.required_auth.keys[0].key}>
              {item.required_auth.keys[0].key}
              <br/>
            </div>
          ))
        }


        <p>创建日期</p> <p>{new Date(userInfo.created+'Z').toLocaleString()}</p>
        <br/>
        <p>EOS资产</p> <p>{userInfo.core_liquid_balance}</p>
        <br/>
        <p>网络：</p><p>{userInfo.net_weight}</p>
        <br/>
        <p>cpu：</p><p>{userInfo.cpu_weight}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({userInfo: state.dashboardReducer.userInfo});

const mapDispatchToProps = dispatch => bindActionCreators({handleUserInfo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
