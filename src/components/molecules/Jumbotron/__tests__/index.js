// Test Jumbotron Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Jumbotron from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(Jumbotron);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
