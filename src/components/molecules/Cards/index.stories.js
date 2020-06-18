// Stories Cards Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Cards from './index';
import Notes from './readme.md';

storiesOf('Molecules', module).add('Cards', () => (
<Cards />
), {
info: { inline: true, header: false, text: Notes },
}
);
