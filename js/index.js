import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import counter from './reducers/index';
import { createStore } from 'redux';

const store = createStore(counter);

// アプリの起点となる部分
function render() {
  ReactDOM.render(
    <Counter
    value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />,
    document.getElementById('main')
  );
}

render();
store.subscribe(render);
