import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {handleNewUsername, handleNewPassword, handleRegister} from '../../actions/registerAction';
import './page3.css';

const Page3 = ({handleNewUsername, handleNewPassword, handleRegister}) => (
  <div id={'login'}>
    <Card id={'login-card'}>
      <AppBar position="static" color={'secondary'}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            EOS 注册
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <TextField
        className="input"
        label="用户名"
        onChange={handleNewUsername}
      />
      <br/>
      <br/>
      <TextField
        className="input"
        label="密码"
        onChange={handleNewPassword}
        type={'password'}
      />
      <br/>
      <br/>
      <br/>
      <Button
        variant="contained"
        color="secondary"
        id={'login-button'}
        onClick={handleRegister}
      >
        提交
      </Button>
    </Card>
  </div>
) ;

const mapDispatchToProps = dispatch => bindActionCreators({handleNewUsername, handleNewPassword, handleRegister},dispatch);

export default connect(null, mapDispatchToProps)(Page3);
