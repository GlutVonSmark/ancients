import React, { Component } from 'react';

class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
  }

  onChange(term) {
    this.props.onSearchTermChange(term);
    this.setState({ term });
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.term}
        placeholder='search ancients'
        onChange={e => this.onChange(e.target.value)}
      />
    );
  }
}
// const SearchField = ({ onSearchTermChange }) => {
//   return (
//     <input
//       type='text'
//       placeholder='search ancients'
//       onChange={e => onSearchTermChange(e.target.value)}
//     />
//   );
// };

export default SearchField;
