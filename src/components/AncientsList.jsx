import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
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

  getGods() {
    axios
      .get('https://athena-7.herokuapp.com/ancients.json')
      .then(response => {
        this.setState({ gods: response.data, isLoading: false });
      })
      .catch(error => console.log(error));
  }

  searchGods(searchTerm) {
    axios
      .get(`https://athena-7.herokuapp.com/ancients.json?search=${searchTerm}`)
      .then(response => {
        this.setState({ gods: response.data.ancients, isLoading: false });
      })
      .catch(error => console.log(error));
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
