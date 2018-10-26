import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {handleNav} from '../../actions/navAction';
import './App.css';

class Home extends Component {
  render() {
    const {handleNav} = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              EOS
            </Typography>
          </Toolbar>
        </AppBar>
        <Button
          id={'button'}
          onClick={handleNav.bind(null, '/page1/')}
          variant="contained"
          color="primary"
        >
          button1
        </Button>
        <br/>
        <Button id={'button'} onClick={handleNav.bind(null, '/page2/')} variant="contained" color="secondary">
          button2
        </Button>
        <br/>
        <Button id={'button'} onClick={handleNav.bind(null, '/page3/')} variant="contained" >
          button3
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  handleNav: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({handleNav}, dispatch);

export default connect(null, mapDispatchToProps)(Home);
