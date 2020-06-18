// Cards Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Cards = ({ propsName }) => (
<tag>
  Functional Component (Stateless Component)
</tag>
);

Cards.propTypes = {
propsName: PropTypes.string,
};

Cards.defaultProps = {
propsName: '',
};

export default Cards;
