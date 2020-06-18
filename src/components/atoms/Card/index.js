// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({ propsName }) => (
<tag>
  Functional Component (Stateless Component)
</tag>
);

Card.propTypes = {
propsName: PropTypes.string,
};

Card.defaultProps = {
propsName: '',
};

export default Card;
