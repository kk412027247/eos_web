import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';

import {handleNav} from "../../actions/navAction";
import {bindActionCreators} from "redux";
import {handleLogout} from "../../actions/registerAction";
import {connect} from "react-redux";
import './sideBar.css'

const SideBar = ({handleNav, handleLogout}) => (
  <Drawer
    variant="permanent"
    anchor={'left'}
    open={true}
  >

    <List id={'side-bar-list'}>
      <hr/>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem
          button
          key={text}
          onClick={handleNav.bind(null,'/page2/')}
        >
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

const mapDispatchToProps = dispatch => bindActionCreators({handleNav, handleLogout}, dispatch);

export default connect(null, mapDispatchToProps)(SideBar);


