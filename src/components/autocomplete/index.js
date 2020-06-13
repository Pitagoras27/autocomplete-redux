import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

class Autocomplete extends Component {
  render() {
    const {
      onChangeText,
      text } = this.props;
    return (
      <div className="main-container">
        <div className="container-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={text}
          onChange={(event) => {
            const newText = event.target.value;
            onChangeText(newText);
          }}
          onBlur={() => {}}
          onFocus={() => {}}
        />
      </div>
    );
  }
}

export default Autocomplete;