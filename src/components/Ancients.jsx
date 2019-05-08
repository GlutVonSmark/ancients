import React, { Component } from 'react';
import athena from '../apis/athena';
import _ from 'lodash';
import SearchField from './SearchField';
import AncientsList from './AncientsList';

class Ancients extends Component {
  state = {
    isLoading: true,
    gods: []
  };

  async getGods() {
    try {
      const response = await athena.get('');
      this.setState({ gods: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  async searchGods(searchTerm) {
    try {
      const response = await athena.get('', {
        params: { search: searchTerm }
      });
      this.setState({ gods: response.data.ancients, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  memoizedSearchGod = _.memoize(this.searchGods);

  componentDidMount() {
    this.getGods();
  }

  onSearchTermChange = term => {
    if (term === '') {
      this.getGods();
    } else {
      this.memoizedSearchGod(term);
    }
  };

  render() {
    const onSearchTermChange = _.debounce(term => {
      this.onSearchTermChange(term);
    }, 500);

    return !this.state.isLoading ? (
      <div>
        <SearchField onSearchTermChange={onSearchTermChange} />
        <AncientsList gods={this.state.gods} />
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

export default Ancients;
