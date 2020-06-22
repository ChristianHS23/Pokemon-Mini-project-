// Test Header Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(Header);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
