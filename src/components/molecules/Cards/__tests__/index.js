// Test Cards Component
// --------------------------------------------------------

import React from 'react';
import Cards from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Cards,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
