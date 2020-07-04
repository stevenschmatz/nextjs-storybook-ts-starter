import React from 'react';

import ExampleButtonProps from './ExampleButton.props';
import styles from './ExampleButton.styles';

export default (props: ExampleButtonProps) => (
  <>
    <button {...props}>{props.children}</button>
    <style jsx>{styles}</style>
  </>
)