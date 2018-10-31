import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Page1 from "../page1/page1";
import Page3 from "../page3/page3";
import Page2 from "../page2/page2";
import {handleNav} from '../../actions/navAction'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class PermanentDrawerLeft extends React.Component {

  componentDidUpdate(){
    console.log('update')
  }


  render(){
    const { classes, handleNav } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              EOS 钱包
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            <ListItem
              button
              onClick={handleNav.bind(null, '/page1/')}
            >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'转账'} />
            </ListItem>
            <ListItem
              button
              onClick={handleNav.bind(null, '/page2/')}
            >
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'个人历史'} />
            </ListItem>
            <ListItem
              button
              onClick={handleNav.bind(null, '/page3/')}
            >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'创建账号'} />
            </ListItem>
            <ListItem button >
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'退出'} />
            </ListItem>

          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />



        </main>
      </div>
    );
  }

}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => bindActionCreators({handleNav}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PermanentDrawerLeft));
