import React from 'react'
import { action } from '@storybook/addon-actions'

import ExampleButton from './ExampleButton';

export default { title: 'Button' }

export const withText = () => (
  <ExampleButton onClick={action('clicked')}>Hello world</ExampleButton>
)
