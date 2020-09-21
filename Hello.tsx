import React from 'react';
import { styled } from './stitches.config';

const Heading = styled('h1', {
  fontFamily: 'mono',
  fontSize: '$6xl',

})

export default ({ name }) => <Heading>Hello {name}!</Heading>;
