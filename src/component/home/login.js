import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {handleUsername, handlePassword, handleLogin} from '../../actions/registerAction';
import './login.css';

// 用户名 tmd555555555
// 密码  123
// EOS账号名 tmd555555555
// publicKey EOS8Cp4AzwyBYFBc8MFHBYF3M9L23sQvwp2x6ch91G4NKti1UR46p
// privateKey 5KX4fnaQWhc6Coz9uqk9GWkjiA8q8R8ditSTDjKcHqsHCwnhJpR

const Login = ({handleUsername, handlePassword, handleLogin}) => (
  <div id={'login'}>
    <Card id={'login-card'}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            EOS 登录
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <TextField
        className="input"
        label="用户名"
        onChange={handleUsername}
      />
      <br/>
      <br/>
      <TextField
        className="input"
        label="密码"
        onChange={handlePassword}
        type={'password'}
      />
      <br/>
      <br/>
      <br/>
      <Button
        variant="contained"
        color="primary"
        id={'login-button'}
        onClick={handleLogin}
      >
        提交
      </Button>
    </Card>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({handleUsername, handlePassword, handleLogin},dispatch);
export default connect(null, mapDispatchToProps)(Login);
