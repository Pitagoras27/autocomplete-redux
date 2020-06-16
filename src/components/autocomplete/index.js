import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

class Autocomplete extends Component {
  state={
    isOpen:false,
  }
  render() {
    const {
      onChangeText,
      text,
      suggestions,
      onChangeSelection,
     } = this.props;
    const { isOpen } = this.state;

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
          onBlur={() => {
            this.setState({ isOpen: false });
          }}
          onFocus={() => {
            if(text) this.setState({ isOpen: true });
          }}
          onKeyPress={e => {
            if(e.key === 'Enter' && text) onChangeSelection(text);
          }}
        />
        {
          isOpen &&
            <Paper className="container-results" square>
              {suggestions.map(suggestion =>
                <MenuItem
                  key={suggestion.id}
                  component="div"
                  onClick={() => {
                    onChangeSelection(suggestion.title);
                    this.setState({ isOpen: false });
                  }}
                >
                  {suggestion.title || 'IS open menu suggestions!'}
                </MenuItem>)}
            </Paper>
        }
      </div>
    );
  }
}

Autocomplete.propTypes= {
  text: PropTypes.string,
  suggestions: PropTypes.array,
  onChangeSelection: PropTypes.func,
  onChangeText: PropTypes.func,
}

Autocomplete.defaultProps= {
  text: '',
  suggestions: [1],
  onChangeSelection: () => {},
  onChangeText: () => {},
}
export default Autocomplete;