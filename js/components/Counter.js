import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h3>Counter: </h3>
        <button>
          +
        </button>
        {' '}
        <button>
          -
        </button>
      </div>
    );
  }
}
