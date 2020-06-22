/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unescaped-entities */
// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { getType } from 'utils/helpers';
import './styles.scss';

const CardFunction = ({ imgSource, title, description, item }) => (
  <Card className='a-card'>
    <Card.Img className='a-card-img' variant='top' src={imgSource} />
    <Card.Body className='a-card-body'>
      <Card.Title className='a-card-title'>{title}</Card.Title>
      {description && (
        <Card.Text className='a-card-description'>{description}</Card.Text>
      )}
      <OverlayTrigger
        trigger='click'
        key='bottom'
        placement='bottom'
        overlay={
          <Popover id='popover-positioned-bottom'>
            <Popover.Title as='h3'>{title} Stats</Popover.Title>
            <Popover.Content className='a-card-popover-content'>
              {item.stats.map((stat) => (
                <p>
                  <strong>{stat.stat.name}</strong> : {stat.base_stat}
                </p>
              ))}
              <p>
                <strong>types</strong> : {getType(item.types)}
              </p>
              <p>
                <strong>weight</strong> : {item.weight}
              </p>
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant='secondary'>Detail Pokemon</Button>
      </OverlayTrigger>
      {/* <Button variant='primary'>Go somewhere</Button> */}
    </Card.Body>
  </Card>
);

CardFunction.propTypes = {
  imgSource: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  item: PropTypes.object,
};

CardFunction.defaultProps = {
  imgSource: '',
  title: '',
  description: '',
  item: {},
};

export default CardFunction;
