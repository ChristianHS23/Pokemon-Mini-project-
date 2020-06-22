/* eslint-disable comma-dangle */
// Cards Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components';
import { capitalize } from 'utils/helpers';
import './styles.scss';

const Cards = ({ listCard, isMobile }) => {
  return (
    <div className='m-cards'>
      <h1 className='m-cards-h1'>Here the list</h1>
      <div className={`${isMobile ? '' : 'row row-cols-5'} m-cards-columns`}>
        {listCard.map((item, index) => (
          <Card
            title={capitalize(item.name)}
            description={item.description}
            imgSource={item.sprites.front_default}
            item={item}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  listCard: PropTypes.array,
  isMobile: PropTypes.bool,
};

Cards.defaultProps = {
  listCard: [],
  isMobile: false,
};

export default Cards;
