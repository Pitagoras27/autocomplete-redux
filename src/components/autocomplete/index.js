import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

class Autocomplete extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value=''
          style={{ width: '100%' }}
          onChange={() => {}}
          onBlur={() => {}}
          onFocus={() => {}}
        />
      </div>
    );
  }
}

export default Autocomplete;