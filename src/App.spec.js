import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index'; //Import the reducer

// Connect our store to the reducers
export const mockStore = createStore(reducers, applyMiddleware(thunk));


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore}>
      <App/>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
