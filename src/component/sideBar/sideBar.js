import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Computer from '@material-ui/icons/Computer'
import ListItemText from '@material-ui/core/ListItemText';
import Build from '@material-ui/icons/Build';

import {handleNav} from "../../actions/navAction";
import {bindActionCreators} from "redux";
import {handleLogout} from "../../actions/registerAction";
import {connect} from "react-redux";
import './sideBar.css'


const NavItem = ({Icon, path, title, handleNav}) => (
  <ListItem
    button
    onClick={handleNav.bind(null,path)}
  >
    <ListItemIcon>
      <Icon/>
    </ListItemIcon>
    <ListItemText
      primary={title}
    />
  </ListItem>
);

const SideBar = ({handleNav, handleLogout}) => (
  <Drawer
    variant="permanent"
    anchor={'left'}
    open={true}
  >

    <List id={'side-bar-list'}>
      <hr/>
      <NavItem
        Icon={Computer}
        path={'/dashboard/'}
        title={'区块信息'}
        handleNav={handleNav}
      />

      <NavItem
        Icon={Build}
        path={'/producer/'}
        title={'生产者'}
        handleNav={handleNav}
      />

      <ListItem
        button
        onClick={handleNav.bind(null,'/page1/')}
      >
        <ListItemIcon><InboxIcon/></ListItemIcon>
        <ListItemText primary={'历史操作'} />
      </ListItem>
      <ListItem
        button
        onClick={handleNav.bind(null,'/page2/')}
      >
        <ListItemIcon><MailIcon/></ListItemIcon>
        <ListItemText primary={'转账'} />
      </ListItem>
      <ListItem
        button
        onClick={handleNav.bind(null,'/page3/')}
      >
        <ListItemIcon><InboxIcon/></ListItemIcon>
        <ListItemText primary={'注册'} />
      </ListItem>
      <ListItem
        button
        onClick={handleLogout}
      >
        <ListItemIcon><MailIcon/></ListItemIcon>
        <ListItemText primary={'登录'} />
      </ListItem>
    </List>
  </Drawer>
);

const mapDispatchToProps = dispatch => bindActionCreators({handleNav, handleLogout}, dispatch);

export default connect(null, mapDispatchToProps)(SideBar);


