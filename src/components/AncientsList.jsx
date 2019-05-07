import React, { Component } from 'react';
import athena from '../apis/athena';
import _ from 'lodash';
import { parse } from 'date-fns';
import GodItem from './GodItem';
import SearchField from './SearchField';

class AncientsList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      gods: []
    };
  }

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

  generateListItems() {
    if (this.state.gods) {
      return this.state.gods.map(god => <GodItem key={god.name} god={god} />);
    }
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
        <h2>Ancients List</h2>
        <SearchField onSearchTermChange={term => onSearchTermChange(term)} />
        <ul>{this.generateListItems()}</ul>
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

export default AncientsList;
