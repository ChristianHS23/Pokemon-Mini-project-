/* eslint-disable comma-dangle */
// Jumbotron Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';
import './styles.scss';

const JumbotronFunction = ({ propsName }) => (
  <Jumbotron className='m-jumbotron'>
    <h1>Welcome</h1>
    <p>Hundred Pokemons waiting to discover</p>
    <p>
      <Button variant='primary'>Explore Now</Button>
    </p>
  </Jumbotron>
);

JumbotronFunction.propTypes = {
  propsName: PropTypes.string,
};

JumbotronFunction.defaultProps = {
  propsName: '',
};

export default JumbotronFunction;
