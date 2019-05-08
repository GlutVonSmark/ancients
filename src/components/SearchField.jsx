import React, { Component } from 'react';

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
        <label>Search:</label>
        <input
          type='text'
          value={this.state.term}
          placeholder='start typing to search'
          onChange={e => this.onInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchField;
