/* eslint-disable comma-dangle */
/* eslint-disable react/no-unescaped-entities */
// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './styles.scss';

const CardFunction = ({ imgSource, title, description }) => (
  <Card className='a-card'>
    <Card.Img variant='top' src={imgSource} />
    <Card.Body>
      <Card.Title className='a-card-title'>{title}</Card.Title>
      {description && (
        <Card.Text className='a-card-description'>{description}</Card.Text>
      )}
      <Button variant='primary'>Go somewhere</Button>
    </Card.Body>
  </Card>
);

CardFunction.propTypes = {
  imgSource: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

CardFunction.defaultProps = {
  imgSource: '',
  title: '',
  description: '',
};

export default CardFunction;
