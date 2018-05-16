import React from 'react';
import ReactDOM from 'react-dom';
import MockRouter from 'react-mock-router';
import NavigationLink from './NavigationLink';

it('renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<MockRouter><NavigationLink/></MockRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});