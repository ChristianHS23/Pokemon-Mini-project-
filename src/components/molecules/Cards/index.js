/* eslint-disable comma-dangle */
// Cards Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components';
import './styles.scss';

const Cards = ({ listCard }) => (
  <div className='m-cards'>
    <h1 className='m-cards-h1'>Here the list</h1>
    <div className='row row-cols-5 m-cards-columns'>
      {listCard.map((item, index) => (
        <Card
          title={item.title}
          description={item.description}
          imgSource={item.imgSource}
        />
      ))}
    </div>
  </div>
);

Cards.propTypes = {
  listCard: PropTypes.array,
};

Cards.defaultProps = {
  listCard: [],
};

export default Cards;
