import React, { Component } from 'react';
import athena from '../apis/athena.js';

class OracleError extends Component {
  state = { OracleMessage: 'Click me to receive the prophecy' };

  getProphecy = async () => {
    try {
      await athena.get('', {
        params: { error: true }
      });
    } catch (error) {
      this.setState({ OracleMessage: error.response.data.error });
    }
  };

  render() {
    return (
      <div>
        <button type='button' onClick={this.getProphecy}>
          Click to ask Oracle
        </button>
        <div>{this.state.OracleMessage}</div>
      </div>
    );
  }
}

export default OracleError;
