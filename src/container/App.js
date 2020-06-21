/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cards, Header, Jumbotron } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getListPokemonData, getListNextPokemon } from 'stores/actions/pokemon';
import { isBottom } from 'utils/helpers';
import './App.scss';

// const dummyList = [
//   {
//     title: '1',
//     description: 'asdsad',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: '2',
//     description: 'asdascdasc',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: '3',
//     description: 'fdsfdsf',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: '4',
//     description: 'qwdqwdd',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wxcz',
//     description: 'asdascdasc',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wafasfow',
//     description: 'fdsfdsf',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'qwreqw',
//     description: 'qwdqwdd',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wow',
//     description: 'asdsad',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wxcz',
//     description: 'asdascdasc',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wafasfow',
//     description: 'fdsfdsf',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'qwreqw',
//     description: 'qwdqwdd',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'wxcz',
//     description: 'asdascdasc',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
//   {
//     title: 'qwreqw',
//     description: 'qwdqwdd',
//     imgSource: 'https://pokeapi.co/static/pokeapi_256.888baca4.png',
//   },
// ];

class App extends Component {
  state = {
    isMobile: false,
  };

  async componentDidMount() {
    const { getListPokemonData } = this.props;
    await getListPokemonData();
    document.addEventListener('scroll', this.trackScrolling);
    const isMobile = window.innerWidth < 896;
    this.setIsMobile(isMobile);
    window.onresize = () => {
      const isMobile = window.innerWidth < 896;
      this.setIsMobile(isMobile);
    };
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  setIsMobile = (isMobile) => {
    this.setState({ isMobile });
  };

  trackScrolling = async () => {
    const { getListNextPokemon } = this.props;
    const wrappedElement = document.getElementById('root');
    if (isBottom(wrappedElement)) {
      console.warn('header bottom reached');
      document.removeEventListener('scroll', this.trackScrolling);
      await getListNextPokemon(() =>
        document.addEventListener('scroll', this.trackScrolling)
      );
    }
  };

  render() {
    const {
      props: { listPokemon },
      state: { isMobile },
    } = this;
    return (
      <div className='App'>
        <Header />
        <Jumbotron />
        <Cards listCard={listPokemon} isMobile={isMobile} />
      </div>
    );
  }
}

App.propTypes = {
  getListPokemonData: PropTypes.func.isRequired,
  getListNextPokemon: PropTypes.func.isRequired,
  listPokemon: PropTypes.array.isRequired,
};

const mapStateToProps = ({ pokemon }) => ({
  listPokemon: pokemon.pokemonShow,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getListPokemonData, getListNextPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
