import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {handleSearch, handleSearchInput, handleKeyDown} from '../../actions/headerAction';
import './header.css';

const Header = ({searchInput, handleSearchInput, handleSearch, handleKeyDown}) =>(
  <AppBar id={'header'} >
    <Toolbar>
      <Typography variant="h6" color="inherit">
        EOS
      </Typography>
      <div>
        <input
          type="text"
          className={'search'}
          value={searchInput}
          onChange={handleSearchInput}
          onKeyDown={handleKeyDown}
        />

      </div>

      <Button
        variant="contained"
        className={'button'}
        onClick={handleSearch}
      >
        搜索
        <SearchIcon/>
      </Button>


    </Toolbar>
  </AppBar>
);

const mapStateToProps = state => ({searchInput: state.headerReducer.searchInput});

const mapDispatchToProps = dispatch => bindActionCreators({handleSearch, handleSearchInput, handleKeyDown}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
