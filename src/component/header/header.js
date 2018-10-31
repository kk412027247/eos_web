import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () =>(
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          EOS
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
