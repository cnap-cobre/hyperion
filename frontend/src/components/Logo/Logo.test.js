import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';

const mockStore = configureStore([]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Provider store={mockStore({})}>
      <Logo />
    </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
