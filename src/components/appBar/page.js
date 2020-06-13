import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';

import './styles.css';

const Page = ({
  text,
  suggestions,
  onChangeText,
  onChangeSelection,
}) => {

  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Typography variant="h6" color="inherit">
          Programax
        </Typography>

        <Autocomplete
          text={text}
          suggestions={suggestions}
          onChangeText={() => { }}
          onChangeSelection={onChangeSelection}
        />

        <AccountCircle />
      </Toolbar>
    </AppBar>
  );
}

export default Page;