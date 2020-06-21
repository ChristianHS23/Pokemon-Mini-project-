/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Cards, Header, Jumbotron } from 'components';
import './App.scss';

const dummyList = [
  {
    title: '1',
    description: 'asdsad',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: '2',
    description: 'asdascdasc',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: '3',
    description: 'fdsfdsf',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: '4',
    description: 'qwdqwdd',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wxcz',
    description: 'asdascdasc',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wafasfow',
    description: 'fdsfdsf',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'qwreqw',
    description: 'qwdqwdd',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wow',
    description: 'asdsad',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wxcz',
    description: 'asdascdasc',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wafasfow',
    description: 'fdsfdsf',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'qwreqw',
    description: 'qwdqwdd',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'wxcz',
    description: 'asdascdasc',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
  {
    title: 'qwreqw',
    description: 'qwdqwdd',
    imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
  },
];

function App() {
  return (
    <div className='App'>
      <Header />
      <Jumbotron />
      <Cards listCard={dummyList} />
    </div>
  );
}

export default App;
