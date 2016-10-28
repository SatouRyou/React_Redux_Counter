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
      // 加算処理のイベント
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      // 引算処理のイベント
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />,
    document.getElementById('main')
  );
}

// 初回描画
render();

// storeに描画関数を保存
store.subscribe(render);
