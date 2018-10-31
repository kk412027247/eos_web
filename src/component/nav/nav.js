import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import './nav.css';
import {handleNav} from "../../actions/navAction";
import {handleLogout} from '../../actions/registerAction';


const Nav = ({handleNav, handleLogout, login}) =>(
  <nav id={'nav'}>
    <List component="nav">
      <ListItem
        button
        onClick={handleNav.bind(null,'/page1/')}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="历史" />
      </ListItem>
      <ListItem
        button
        onClick={handleNav.bind(null,'/page2/')}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="转账" />
      </ListItem>
      <ListItem
        button
        onClick={handleNav.bind(null,'/page3/')}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="创建账号" />
      </ListItem>
      <ListItem
        button
        onClick={handleLogout}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={login ? '退出' : '登录'} />
      </ListItem>
    </List>
  </nav>
);

const mapStateToProps = state => ({login: !!state.registerReducer.privateKey});

const mapDispatchToProps = dispatch => bindActionCreators({handleNav, handleLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
