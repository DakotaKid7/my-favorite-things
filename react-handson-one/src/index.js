import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement(
      'li',
      {},
      'Favorite Colors',
      React.createElement(
        'ol',
        React.createElement('li', {}, 'Green')
        {},
        React.createElement('li', {}, 'Blue')
        {},
        React.createElement('li', {}, 'Red')
        {},
      )
    ),
    React.createElement(
      'li',
      {},
      'Favorite Music',
      React.createElement(
        'ol',
        {},
        React.createElement('li', {}, 'Excision')
        {},
        React.createElement('li', {}, 'Amon Tobin')
        {},
        React.createElement('li', {}, 'Avicci')
      )
    ),
    React.createElement(
        'li',
        {},
        'Favorite Food',
        React.createElement(
          'ol',
          {},
          React.createElement('li', {}, 'Mac n Cheese')
          {},
          React.createElement('li', {}, 'Pho')
          {},
          React.createElement('li', {}, 'Pad Thai')
    )
    React.createElement(
        'li',
        {},
        'Favorite Wesbites',
        React.createElement(
          'ol',
          {},
          React.createElement('li', {}, 'www.google.com')
          {},
          React.createElement('li', {}, 'www.lacasting.com')
          {},
          React.createElement('li', {}, 'www.facebook.com')
  ),
  document.getElementById('root')
);

