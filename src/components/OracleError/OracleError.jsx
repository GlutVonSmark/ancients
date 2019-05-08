import React, { Component } from 'react';
import athena from '../../apis/athena.js';
import './OracleError.css';

class OracleError extends Component {
  state = { OracleMessage: 'Click me to receive the prophecy', error: false };

  getProphecy = async () => {
    try {
      await athena.get('', {
        params: { error: true }
      });
    } catch (error) {
      this.setState({ OracleMessage: error.response.data.error, error: true });
    }
  };

  render() {
    return (
      <div className='centered animated-from-bottom--fast'>
        <button
          type='button'
          onClick={this.getProphecy}
          className={this.state.error === true ? 'error' : ''}
        >
          {this.state.OracleMessage}
        </button>
      </div>
    );
  }
}

export default OracleError;
