import React, { Component } from 'react';
import axios from 'axios';
import GodItem from './GodItem';

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

  componentDidMount() {
    this.getGods();
  }

  generateUlItems() {
    console.log(this.state);
    return this.state.gods.map(god => <GodItem god={god} />);
  }

  render() {
    return !this.state.isLoading ? (
      <div>
        <h2>Ancients List</h2>
        <ul>{this.generateUlItems()}</ul>
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

export default AncientsList;
