import React, { Component } from 'react';
import athena from '../apis/athena';
import _ from 'lodash';
import SearchField from './SearchField/SearchField';
import AncientsList from './AncientsList/AncientsList';
import { UpperCaseArrayObjects } from '../tools';
import Loader from 'react-loader-spinner';

class Ancients extends Component {
  state = {
    isLoading: true,
    gods: []
  };

  setGods(gods) {
    this.setState({ gods: UpperCaseArrayObjects(gods) });
  }

  async getGods() {
    try {
      const response = await athena.get('');
      this.setGods(response.data);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  async searchGods(searchTerm) {
    try {
      const response = await athena.get('', {
        params: { search: searchTerm }
      });
      return response.data.ancients;
    } catch (error) {
      console.log(error);
    }
  }

  memoizedSearchGod = _.memoize(this.searchGods);

  componentDidMount() {
    this.getGods();
  }

  onSearchTermChange = async term => {
    if (term === '') {
      this.getGods();
    } else {
      const gods = await this.memoizedSearchGod(term);
      this.setGods(gods);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const onSearchTermChange = _.debounce(term => {
      this.onSearchTermChange(term);
    }, 300);

    return !this.state.isLoading ? (
      <div className='centered'>
        <SearchField onSearchTermChange={onSearchTermChange} />
        <AncientsList gods={this.state.gods} />
      </div>
    ) : (
      <div className='centered loader'>
        <Loader type='Ball-Triangle' color='black' height='100' width='100' />
      </div>

      // <h2 className='centered loader'>Loading...</h2>
    );
  }
}

export default Ancients;
