// Test Cards Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Cards from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(Cards);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
