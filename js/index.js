import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

function render() {
  ReactDOM.render(
    <Counter />,
    document.getElementById('main')
  );
}

render();
