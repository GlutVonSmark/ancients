import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
  state = { term: '' };

  onInputChange(e) {
    this.setState({ term: e.target.value }, () => {
      this.props.onSearchTermChange(this.state.term);
    });
  }

  render() {
    return (
      <div>
        <label>Filter gods:</label>
        <input
          className='searchInput'
          type='text'
          value={this.state.term}
          placeholder='start typing to filter'
          onChange={e => this.onInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchField;
